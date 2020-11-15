from rest_framework import serializers
from .models import SignupUser


class SignupUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = SignupUser
        fields = '__all__'