# Generated by Django 3.1.5 on 2021-01-28 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pies', '0002_pie_categories'),
        ('jwt_auth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='favourites',
            field=models.ManyToManyField(related_name='users', to='pies.Pie'),
        ),
    ]
