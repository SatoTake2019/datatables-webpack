from django.urls import path
from . import views

app_name = 'tables'

urlpatterns = [
    path('', views.TableView.as_view(), name="table"),
]
