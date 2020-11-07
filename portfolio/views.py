from django.shortcuts import render, HttpResponse, redirect
from .models import *
# Create your views here.
def index(request):
    return render(request, 'index.html')

def contact(request):
    amess = Message.objects.all()
    context = {
        'messages': amess ,
    }
    return render(request,'contact.html', context)

def message(request):
    if request.method == "POST":
        Message.objects.create(
            name = request.POST['name'],
            email = request.POST['email'],
            message = request.POST['message'],
        )
        print('message was saved')
    return redirect('/contact')

def pro404(request):
    return render(request,'project404.html')