from django.urls import path
from .views import ElectronicListCreateView,CategoryRetrieveUpdateDestroyView, CategoryUpdateView, CategooryListView, ElectronicListView, ElectronicCreateView, ElectronicRetrieveUpdateDestroyView, CategoryCreateView, ElectronicUpdateView, CategoryDeleteView, CategoryRetrieveView

urlpatterns = [
    # Electronics URLs
    # List all electronics and create a new electronic item
    path('electronics/', ElectronicListView.as_view(), name='electronics-list'),
    path('electronics/create/', ElectronicCreateView.as_view(), name='electronics-create'),
    path('electronics/<int:pk>/', ElectronicRetrieveUpdateDestroyView.as_view(), name='electronics-retrieve-update-destroy'),

    # Categories URLs
    path('categories/', CategooryListView.as_view(), name='categories-list'),
    path('categories/create', CategoryCreateView.as_view(), name='category-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-retrieve'),
]
 