# Generated by Django 4.1 on 2022-08-15 01:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profile",
            name="nickname",
            field=models.CharField(max_length=20, null=True, unique=True),
        ),
    ]
