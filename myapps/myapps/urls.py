from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('tables/', include('tables.urls')),
    path('admin/', admin.site.urls),
]
