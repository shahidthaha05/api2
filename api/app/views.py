from django.shortcuts import render
from .models import *
from .serializers import *
from rest_framework import viewsets

# Create your views here.


class Task_view(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=model_ser