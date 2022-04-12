from django.urls import path, include
from .views import ClassViewSet, ModuleViewSet, ListClassByModules
from rest_framework import routers

router = routers.DefaultRouter()
router.register('modulos', ModuleViewSet, basename='modulos')
router.register('aulas', ClassViewSet, basename='classes')

urlpatterns = [
    path('', include(router.urls)),
    path('modulos/<int:pk>/aulas/', ListClassByModules.as_view()),
]
