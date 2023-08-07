from rest_framework import generics
from .models import Electronic, Category
from .serializers import ElectronicSerializer, CategorySerializer

class CategooryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryRetrieveView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryUpdateView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDeleteView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ElectronicUpdateView(generics.UpdateAPIView):
    queryset = Electronic.objects.all()
    serializer_class = ElectronicSerializer

class ElectronicListCreateView(generics.ListCreateAPIView):
    queryset = Electronic.objects.all()
    serializer_class = ElectronicSerializer

class ElectronicRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Electronic.objects.all()
    serializer_class = ElectronicSerializer

class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

#list view
class ElectronicListView(generics.ListAPIView):
    queryset = Electronic.objects.all()
    serializer_class = ElectronicSerializer

#create view
class ElectronicCreateView(generics.CreateAPIView):
    queryset = Electronic.objects.all()
    serializer_class = ElectronicSerializer




