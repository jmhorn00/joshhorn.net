from django.contrib import admin
from .models import Service


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'hourly_rate', 'flat_price', 'is_featured', 'order')
    list_editable = ('is_featured', 'order')
    list_filter = ('is_featured',)
    search_fields = ('name', 'description')
