import os
from .settings import *
from .settings import BASE_DIR

from decouple import config


# Asumiendo que SECRET es la clave secreta de Django
SECRET_KEY = config('SECRET')

# Configuración de los hosts permitidos
ALLOWED_HOSTS = config.get("WEBSITE_HOSTNAME", "localhost")
CSRF_TRUSTED_ORIGINS = [f"https://{config.get('WEBSITE_HOSTNAME', 'localhost')}"]


# Asumiendo que quieres ejecutar en modo producción sin DEBUG
DEBUG = False

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    "whitenoise.middleware.WhiteNoiseMiddleware",
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

# Configuración estática
STATIC_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

# Configuración de la base de datos
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': config('AZURE_MYSQL_NAME'),
        'USER': config('AZURE_MYSQL_USER'),
        'PASSWORD': config('AZURE_MYSQL_PASSWORD'),
        'HOST': config('AZURE_MYSQL_HOST'),
    }
}
