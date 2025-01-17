from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('ourwork/', views.ourwork, name='ourwork'),
    path('careers/', views.careers, name='careers'),
    path('locations/', views.locations, name='locations'),
    path('contact/', views.contact, name='contact'),
    path('building_construction/', views.building_construction, name='building_construction'),
    path('architecture_design/', views.architecture_design, name='architecture_design'),
    path('house_renovation/', views.house_renovation, name='house_renovation'),
    path('interior_design/', views.interior_design, name='interior_design'),
    path('painting/', views.painting, name='painting'),
    path('success/', views.success, name='success'),
]