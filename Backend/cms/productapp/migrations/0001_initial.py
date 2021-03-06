# Generated by Django 3.0.2 on 2020-01-30 13:00

from django.db import migrations, models
import django.db.models.deletion
import jsonfield.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Brand',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254, unique=True)),
                ('data_created', models.DateTimeField(auto_now_add=True)),
                ('last_modifiction', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Categories',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250, unique=True)),
                ('data_created', models.DateTimeField(auto_now_add=True)),
                ('last_modifiction', models.DateTimeField(auto_now=True)),
                ('parent_category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='productapp.Categories')),
            ],
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=254, unique=True)),
                ('data_created', models.DateTimeField(auto_now_add=True)),
                ('last_modifiction', models.DateTimeField(auto_now=True)),
                ('specification', jsonfield.fields.JSONField()),
                ('brand', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productapp.Brand')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='productapp.Categories')),
            ],
        ),
    ]
