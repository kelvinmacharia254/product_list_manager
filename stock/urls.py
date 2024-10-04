from django.urls import path

from . import views

urlpatterns = [
    path("products/", views.ProductListCreateView.as_view(), name="product-list"),
    path("product/<int:pk>", views.ProductDetailView.as_view(), name="product-detail"),
]