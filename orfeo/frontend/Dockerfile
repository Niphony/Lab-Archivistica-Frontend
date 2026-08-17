FROM node:19-alpine AS builder

RUN apk add --no-cache git openssh

ARG FRONTEND_REPO=https://github.com/skinatech/orfeong_frontend.git
ARG FRONTEND_BRANCH=main

ARG API_URL=/ng_backend/api/web/
ARG API_BASE_PATH=/ng_backend
ARG FRONT_URL=/orfeo-ng/
ARG SOCKET_ENDPOINT=/socket
ARG AES_KEY=123456
ARG CAPTCHA_KEY=6Lc8_d4UAAAAANK-6A3w_lP6Crr6BJzT9ldbK_iO

RUN git clone --depth 1 -b $FRONTEND_BRANCH $FRONTEND_REPO /app

WORKDIR /app

RUN npm install --force && npm install @types/datatables.net --save-dev --force

RUN npm install -g @angular/cli@14

RUN cat src/environments/environment.prod.ts.dist | \
    sed "s|apiUrl:.*|apiUrl: '$API_URL',|" | \
    sed "s|apiUrlBasePath:.*|apiUrlBasePath: '$API_BASE_PATH',|" | \
    sed "s|frontUrl:.*|frontUrl: '$FRONT_URL',|" | \
    sed "s|SOCKET_ENDPOINT:.*|SOCKET_ENDPOINT: '$SOCKET_ENDPOINT',|" | \
    sed "s|llaveAES:.*|llaveAES: '$AES_KEY',|" | \
    sed "s|captchaSiteKey:.*|captchaSiteKey: '$CAPTCHA_KEY',|" \
    > src/environments/environment.prod.ts

RUN cp src/environments/environment.prod.ts src/environments/environment.ts

RUN echo 'declare namespace DataTables { interface Api<T = any> { columns: any; rows: any; draw(): void; [key: string]: any; } }' > src/typings.d.ts

RUN sed -i 's/DataTables\.Api/any/g' src/app/modules/components/initial-list/initial-list.component.ts

RUN export NODE_OPTIONS="--max-old-space-size=2048" && ng build --configuration production

FROM nginx:1.25-alpine

COPY --from=builder /app/dist/orfeo-ng /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
