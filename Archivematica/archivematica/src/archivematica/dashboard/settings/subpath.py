"""Settings del dashboard de Archivematica servido bajo el prefijo /archivematica.

Requiere la variable de entorno SCRIPT_NAME=/archivematica en el contenedor
(gunicorn la propaga como WSGI SCRIPT_NAME y Django/WhiteNoise la respetan).
"""

from archivematica.dashboard.settings.local import *  # noqa: F401,F403

FORCE_SCRIPT_NAME = "/archivematica"
STATIC_URL = "/archivematica/media/"

LOGIN_URL = "/archivematica/administration/accounts/login/"
LOGIN_REDIRECT_URL = "/archivematica/"

LOGIN_EXEMPT_URLS = [
    r"^administration/accounts/login",
    r"^api",
    r"^jsi18n",
    r"^metrics",
    r"^oidc",
]

SESSION_COOKIE_NAME = "am_dashboard_sessionid"
CSRF_COOKIE_NAME = "am_dashboard_csrf"
