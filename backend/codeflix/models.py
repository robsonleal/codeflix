from django.db import models


class Module(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Módulo'
    )

    def __str__(self):
        return self.name


class Class(models.Model):
    name = models.CharField(
        max_length=255,
        verbose_name='Módulo'
    )

    book = models.ManyToManyField(
        Module,
        verbose_name='Módulo',
    )

    date_class = models.DateField()

    def __str__(self):
        return self.name
