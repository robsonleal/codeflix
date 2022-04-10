from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import Class
from .serializer import ClassSerializer


class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
    permission_classes = (IsAuthenticated,)
