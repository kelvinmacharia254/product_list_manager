from django.shortcuts import render
from rest_framework import generics

from drf_spectacular.utils import extend_schema

from stock.models import Product
from .serializers import ProductSerializer


# Create your views here.
@extend_schema(
    description="List and create products",
    responses={200: ProductSerializer},
)
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


@extend_schema(
    description="Retrieve a specific product",
    responses={200: ProductSerializer},
)
class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
