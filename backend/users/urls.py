from django.urls import path

# inbuilt DRF Token authentication system
# from rest_framework.authtoken.views import obtain_auth_token

# DRF simplejwt 3rd party Token auth
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenBlacklistView

urlpatterns = [
    # path("api-token-auth/", obtain_auth_token),  # inbuilt DRF Token authentication system
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
]