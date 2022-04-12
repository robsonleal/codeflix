from rest_framework import serializers
from .models import Class, Module


class ModuleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Module
        fields = '__all__'


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'


class ClassByModulesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = '__all__'
