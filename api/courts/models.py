from django.db import models

# Create your models here.

class SignupUser(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    email = models.CharField(max_length=100, blank=False, default='')

    def __str__(self):
        return f"{self.email}"