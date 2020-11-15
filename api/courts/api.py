from rest_framework import generics
from rest_framework.response import Response
from .serializers import SignupUserSerializer
from .models import SignupUser


class SignupUserCreateApi(generics.CreateAPIView):

    queryset = SignupUser.objects.all()
    serializer_class = SignupUserSerializer