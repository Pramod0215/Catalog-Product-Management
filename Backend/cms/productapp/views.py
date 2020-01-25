from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from .serializer import *

from django.shortcuts import get_object_or_404
# Create your views here.

class BrandViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Brand.objects.all()
        serializers = BrandSerializer(queryset, many=True)
        return  Response(serializers.data)


    def retrieve(self, request, pk=None):
        queryset = Brand.objects.all()
        brand = get_object_or_404(queryset, pk=pk)
        serializer = BrandSerializer(brand)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save()

    def create(self, request):
        serializer = BrandSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



class ProductViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Product.objects.all()
        brand = self.request.query_params.get('brand',None)
        if brand is not None:
            queryset = queryset.filter(brand__id=int(brand))
        category = self.request.query_params.get('category',None)
        if category is not None:
            queryset = queryset.filter(category__id = int(category))
        serializers = ProductSerializer(queryset, many=True)
        return  Response(serializers.data)

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        queryset = Product.objects.all()
        product = get_object_or_404(queryset, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save()

    def create(self, request):
        serializer = ProductCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class CategoriesViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = Categories.objects.all()
        serializers = CategoriesSerialzer(queryset, many=True)
        return Response(serializers.data)

    def create(self, request):
        serializer = CategoriesCreateSerialzer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        serializer.save()

    def retrieve(self, request, pk=None):
        queryset = Categories.objects.all()
        categories = get_object_or_404(queryset, pk=pk)
        serializer = CategoriesSerialzer(categories)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
