from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny
from codeflix.models import Module, Class
from codeflix.serializers\
    import ClassSerializer, ModuleSerializer, ClassByModulesSerializer


class ModuleViewSet(viewsets.ModelViewSet):
    queryset = Module.objects.all().order_by('name')
    serializer_class = ModuleSerializer
    permission_classes = (AllowAny,)


class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer
    permission_classes = (AllowAny,)


class ListClassByModules(generics.ListAPIView):
    def get_queryset(self):
        return Class.objects.filter(module=self.kwargs['pk'])
    serializer_class = ClassByModulesSerializer
    permission_classes = (AllowAny,)
