from django.shortcuts import render
from .models import Project, Service


def home(request):
    sent = False
    if request.method == 'POST':
        sent = True

    return render(request, 'core/pages/home.html', {
        'projects': Project.objects.all(),
        'services': Service.objects.all(),
        'sent': sent,
    })


def about(request):
    return render(request, 'core/pages/about.html')


def projects(request):
    return render(request, 'core/pages/projects.html', {
        'projects': Project.objects.all(),
    })


def contact(request):
    sent = False
    if request.method == 'POST':
        sent = True
    return render(request, 'core/pages/contact.html', {'sent': sent})


def services(request):
    return render(request, 'core/pages/services.html', {
        'services': Service.objects.all(),
    })
