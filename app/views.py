from django.shortcuts import render

# Create your views here.
def home(request):

    return render(request, 'app/home.html')


def auth(request):
    return render(request, 'app/auth.html')

def chat(request):
    return render(request, 'app/chat.html')