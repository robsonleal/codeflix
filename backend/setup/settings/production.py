"""
Django settings for deploy
"""
import environ
from setup.settings.settings import *


env = environ.Env()
DEBUG = env.bool("DEBUG", False)
SECRET_KEY = env("SECRET_KEY")
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
DATABASES = {
    "default": env.db(),
}