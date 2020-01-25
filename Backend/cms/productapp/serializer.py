from rest_framework import serializers
from .models import *
import jsonfield

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ('id', 'name',)

class ParentCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = ('id', 'name')

class CategoriesSerialzer(serializers.ModelSerializer):
    parent_category = ParentCategorySerializer()

    class Meta:
        model = Categories
        fields = ('id','name','parent_category')

class CategoriesCreateSerialzer(serializers.ModelSerializer):

    class Meta:
        model = Categories
        fields = ('id','name', 'parent_category')

class ProductSerializer(serializers.ModelSerializer):
    brand = BrandSerializer()
    specification = serializers.JSONField()
    category = CategoriesSerialzer()

    class Meta:
        model = Product
        fields = ('id', 'name', 'brand', 'category', 'specification')

class ProductCreateSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'brand', 'category', 'name', 'specification')