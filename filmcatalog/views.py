from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import viewsets
from .models import Inventory, Rental, Customer, Payment, Store, Staff, Address, City, Country, Actor, Category, Film, FilmActor, FilmCategory, Language
from .serializers import ActorSerializer, AddressSerializer, CategorySerializer, CitySerializer, CountrySerializer, CustomerSerializer, FilmActorSerializer, FilmCategorySerializer, FilmSerializer, InventorySerializer, LanguageSerializer, PaymentSerializer, RentalSerializer, StaffSerializer, StoreSerializer

# Create your views here.

#Crea y lista languages
class LanguageList(ListCreateAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

#Obtiene, actualiza, borra language con respectivo id
class LanguageDetail(RetrieveUpdateDestroyAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

#Permite get, post, update, delete
class FilmViewSet(viewsets.ModelViewSet):
    queryset = Film.objects.all()
    serializer_class = FilmSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class FilmCategoryViewSet(viewsets.ModelViewSet):
    queryset = FilmCategory.objects.all()
    serializer_class = FilmCategorySerializer 


class ActorViewSet(viewsets.ModelViewSet):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


class FilmActorViewSet(viewsets.ModelViewSet):
    queryset = FilmActor.objects.all()
    serializer_class = FilmActorSerializer


class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer


class CityViewSet(viewsets.ModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer


class AddressViewSet(viewsets.ModelViewSet):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer


class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer


class StoreViewSet(viewsets.ModelViewSet):
    queryset = Store.objects.all()
    serializer_class = StoreSerializer


class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer


class InventoryViewSet(viewsets.ModelViewSet):
    queryset = Inventory.objects.all()
    serializer_class = InventorySerializer


class RentalViewSet(viewsets.ModelViewSet):
    queryset = Rental.objects.all()
    serializer_class = RentalSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

