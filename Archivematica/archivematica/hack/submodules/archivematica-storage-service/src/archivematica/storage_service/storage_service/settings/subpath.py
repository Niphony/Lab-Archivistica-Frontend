"""Settings del storage service servido bajo el prefijo /archivematica/storage-service.

Requiere la variable de entorno SCRIPT_NAME=/archivematica/storage-service
en el contenedor (gunicorn la propaga como WSGI SCRIPT_NAME).
"""

from archivematica.storage_service.storage_service.settings.local import *  # noqa: F401,F403

FORCE_SCRIPT_NAME = "/archivematica/storage-service"
STATIC_URL = "/archivematica/storage-service/static/"

LOGIN_URL = "/archivematica/storage-service/login/"
LOGIN_REDIRECT_URL = "/archivematica/storage-service/"

SESSION_COOKIE_NAME = "am_ss_sessionid"
CSRF_COOKIE_NAME = "am_ss_csrf"
