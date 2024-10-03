from django.db import models


# Create your models here.
class products(models.Model):
    name = models.CharField(max_length=100)
    price = models.FloatField()
