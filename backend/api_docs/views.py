# api_docs/views.py
from drf_spectacular.openapi import AutoSchema
from drf_spectacular.utils import extend_schema
from drf_spectacular.views import SpectacularAPIView
import logging

logger = logging.getLogger(__name__)


class CustomSchemaView(SpectacularAPIView):
    @extend_schema(
        summary="Custom API Schema",
        description="This is the custom schema view for the API.",
    )
    def get(self, request, *args, **kwargs):
        logger.debug("Using schema class: %s", self.schema)
        return super().get(request, *args, **kwargs)
