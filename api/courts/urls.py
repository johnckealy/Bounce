from django.urls import path
from .api import SignupUserCreateApi


urlpatterns = [
    path('create',SignupUserCreateApi.as_view()),
]