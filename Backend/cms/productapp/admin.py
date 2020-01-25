from django.db import models

# Create your models here.
from django.contrib import admin
from .models import *

# Register your models here.


class CategoriesAdmin(admin.ModelAdmin):
    list_display = ('name','parent_category',)

class BrandAdmin(admin.ModelAdmin):
    list_display = ('name',)

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name','brand','category','specification',)





admin.site.register(Categories,CategoriesAdmin)
admin.site.register(Brand,BrandAdmin)
admin.site.register(Product, ProductAdmin)
