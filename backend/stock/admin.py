from django.contrib import admin

from stock.models import Product


# Register your models here.
@admin.register(Product)
class productsAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')