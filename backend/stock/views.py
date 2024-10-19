from django.shortcuts import render
from rest_framework import generics

from drf_spectacular.utils import extend_schema

from stock.models import Product
from .serializers import ProductSerializer


# Create your views here.

class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer



class ProductRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

