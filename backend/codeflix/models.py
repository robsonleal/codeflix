from pydoc import describe
from django.db import models


class Module(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Nome do módulo'
    )

    description = models.CharField(
        max_length=1500,
        verbose_name='Descrição'
    )

    def __str__(self):
        return self.name


class Class(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Nome da aula'
    )

    module = models.ForeignKey(
        Module,
        verbose_name='Módulo',
        on_delete=models.DO_NOTHING
    )

    description = models.CharField(
        max_length=1500,
        verbose_name='Descrição'
    )

    date_class = models.DateField(
        verbose_name='Data da aula'
    )

    duration = models.IntegerField(
        verbose_name='Duração'
    )

    def __str__(self):
        return self.name
