from django.shortcuts import render, redirect
from .models import Contact, Career

def index(request):
    return render(request, 'myapp/index.html')  

def about(request):
    return render(request, 'myapp/about.html')

def ourwork(request):
    return render(request, 'myapp/ourwork.html')

def careers(request):  # Renamed to avoid conflict
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        resume = request.FILES.get('resume')  # Handle file upload
        cover_letter = request.POST.get('cover_letter')
        
        # Save the data to the database
        Career.objects.create(
            name=name,
            email=email,
            resume=resume,
            cover_letter=cover_letter
        )
        return redirect('success')  # Redirect to a success page
    return render(request, 'myapp/careers.html')  # Ensure the correct template path

def locations(request):
    return render(request, 'myapp/locations.html')

def contact(request):  # Renamed to avoid conflict
    if request.method == 'POST':
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        message = request.POST.get('message')
        
        # Save the data to the database
        Contact.objects.create(
            name=name,
            phone=phone,
            message=message
        )
        return redirect('success')  # Redirect to a success page
    return render(request, 'myapp/contact.html')  # Ensure the correct template path

def building_construction(request):
    return render(request, 'myapp/building_construction.html') 

def house_renovation(request):  # Renamed to avoid spaces in function names
    return render(request, 'myapp/house_renovation.html') 

def architecture_design(request):  # Renamed to avoid spaces in function names
    return render(request, 'myapp/architecture_design.html') 

def interior_design(request):  # Renamed to avoid spaces in function names
    return render(request, 'myapp/interior_design.html') 

def painting(request):
    return render(request, 'myapp/painting.html') 

def success(request):
    return render(request, 'myapp/success.html')  # Ensure the correct template path