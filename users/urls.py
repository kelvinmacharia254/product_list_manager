from django.urls import path

from users import views

urlpatterns = [
    path('users/', views.UsersListView.as_view(), name='user-list'),
]