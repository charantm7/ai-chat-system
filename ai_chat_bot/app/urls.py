from . import views
from django.urls import path

urlpatterns = [
    path('',views.home, name='Home'),
    path('authentication/', views.auth, name='Auth'),
    path('chat/vorex/', views.chat, name='Chat'),
    

]