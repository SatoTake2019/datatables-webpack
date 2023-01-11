from django.shortcuts import render
from django.views.generic import TemplateView


class TableView(TemplateView):
    # Note that this project uses the same template
    # directory structure as the Django official tutorial.
    template_name = "tables/table.html"
