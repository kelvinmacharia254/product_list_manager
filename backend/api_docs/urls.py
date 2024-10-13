from django.urls import path
from drf_spectacular.views import (
    SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView,
)

urlpatterns = [
    # schema view
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    # swagger UI
    path("schema/swagger-ui/", SpectacularSwaggerView.as_view(url_name='schema'), name="swagger-ui"),
    # Redoc UI(alternative to swagger)
    path("schema/redoc/", SpectacularRedocView.as_view(url_name='schema'), name="redoc"),
]
