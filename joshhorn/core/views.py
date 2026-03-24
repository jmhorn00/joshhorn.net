from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from .models import Project, Service


def home(request):
    sent = False
    if request.method == 'POST':
        name    = request.POST.get('name', '').strip()
        email   = request.POST.get('email', '').strip()
        message = request.POST.get('message', '').strip()

        if name and email and message:
            send_mail(
                subject=f'New message from {name}',
                message=f'From: {name} <{email}>\n\n{message}',
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_EMAIL],
                fail_silently=False,
            )
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
