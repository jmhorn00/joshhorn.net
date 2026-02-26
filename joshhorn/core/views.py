from django.shortcuts import render
from .models import Service

# Create your views here.
def home(request):
    top_services = Service.objects.filter(is_featured=True).order_by('order')[:3]
    return render(request, 'core/pages/home.html', {'top_services': top_services})

def about(request):
    return render(request, 'core/pages/about.html')

def projects(request):
    return render(request, 'core/pages/projects.html')

def contact(request):
    return render(request, 'core/pages/contact.html')

def services(request):
    all_services = Service.objects.all()
    return render(request, 'core/pages/services.html', {'services': all_services})