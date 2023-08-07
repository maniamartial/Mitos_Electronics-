from rest_framework import serializers
from .models import Electronic, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ElectronicSerializer(serializers.ModelSerializer):
    category = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all())

    class Meta:
        model = Electronic
        fields = '__all__'

    def create(self, validated_data):
        category = validated_data.pop('category')
        electronic = Electronic.objects.create(category=category, **validated_data)
        return electronic

