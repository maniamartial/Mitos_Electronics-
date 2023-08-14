from django.contrib.auth import views as auth_views
from django.urls import path, include
from .views import RegisterView, UserLoginView

urlpatterns = [
    # ...
    path('api-auth/', include('rest_framework.urls')),  # For login and logout
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    # ...
]