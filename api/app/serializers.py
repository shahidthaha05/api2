from rest_framework import serializers
from .models import Task


class model_ser(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields='__all__'