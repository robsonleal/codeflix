from django.urls import path, include
from .views import ClassViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('classes', ClassViewSet, basename='classes')

urlpatterns = [
    path('', include(router.urls)),
]
