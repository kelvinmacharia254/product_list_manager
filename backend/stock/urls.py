from django.urls import path

from . import views

urlpatterns = [
    # GET & POST
    path("products/", views.ProductListCreateView.as_view(), name="product-list"),
    path("product/<int:pk>", views.ProductRetrieveUpdateDestroyAPIView.as_view(), name="product-detail"),
]