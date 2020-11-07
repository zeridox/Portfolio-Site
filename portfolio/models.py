from django.db import models

# Create your models here.
class Message(models.Model):
    name = models.CharField(max_length=45)
    email = models.CharField(max_length=255)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)