# Generated by Django 4.0.3 on 2022-04-11 20:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('codeflix', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='class',
            old_name='modulo',
            new_name='module',
        ),
    ]
