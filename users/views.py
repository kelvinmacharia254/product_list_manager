from django.shortcuts import render
from rest_framework import generics

from users.models import CustomUser
from users.serilizers import CustomUserSerializer


# Create your views here.


class UsersListView(generics.ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
