from django.contrib import admin

# Register your models here.

# admin.py
from django.contrib import admin
from .models import Contact, Career

admin.site.register(Contact)
admin.site.register(Career)
