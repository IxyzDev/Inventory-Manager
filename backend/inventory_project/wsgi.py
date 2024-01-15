import os

from django.core.wsgi import get_wsgi_application
from decouple import config

# Define el módulo de configuración por defecto y el de despliegue
DEFAULT_SETTINGS_MODULE = 'inventory_project.settings'
DEPLOYMENT_SETTINGS_MODULE = 'inventory_project.settings.deployment'

# Utiliza 'decouple' para obtener el nombre del módulo de configuración
# Si 'WEBSITE_HOSTNAME' está presente, usa el módulo de configuración de despliegue, de lo contrario, usa el predeterminado
settings_module = DEPLOYMENT_SETTINGS_MODULE if config('WEBSITE_HOSTNAME', default=None) else DEFAULT_SETTINGS_MODULE

# Configura el módulo de configuración de Django
os.environ['DJANGO_SETTINGS_MODULE'] = settings_module

# Inicializa la aplicación WSGI de Django
application = get_wsgi_application()
