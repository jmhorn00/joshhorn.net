from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'core/pages/home.html')

def about(request):
    return render(request, 'core/pages/about.html')
def projects(request):
    return render(request, 'core/pages/projects.html')
def contact(request):
    return render(request, 'core/pages/contact.html')