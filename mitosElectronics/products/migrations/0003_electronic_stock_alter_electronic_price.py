# Generated by Django 4.1.1 on 2023-08-07 13:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_electronic_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='electronic',
            name='stock',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='electronic',
            name='price',
            field=models.IntegerField(default=0),
        ),
    ]
