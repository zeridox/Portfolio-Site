from django.urls import path
from . import views 
 
urlpatterns=[
    path('',views.index),
    path('contact', views.contact),
    path('message', views.message),
    path('pro404', views.pro404),
]