from django.shortcuts import render

from django.http import HttpResponse

def home(request):
    return render(request,"Form.html")

def About(request):
    return render(request,"About.html")