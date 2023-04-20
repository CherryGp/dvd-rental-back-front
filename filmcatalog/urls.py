from django.urls import path, include
from .views import LanguageViewSet, TopCustomersAPIView, TopFilmsAPIView, ActorViewSet, AddressViewSet, CityViewSet, CountryViewSet, CustomerViewSet, FilmActorViewSet, FilmCategoryViewSet, CategoryViewSet, FilmViewSet, InventoryViewSet, PaymentViewSet, RentalViewSet, StaffViewSet, StoreViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'languages', LanguageViewSet)
router.register(r'films', FilmViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'filmcategories', FilmCategoryViewSet)
router.register(r'actors', ActorViewSet)
router.register(r'filmactors', FilmActorViewSet)
router.register(r'countries', CountryViewSet)
router.register(r'cities', CityViewSet)
router.register(r'addresses', AddressViewSet)
router.register(r'staff', StaffViewSet)
router.register(r'stores', StoreViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'inventory', InventoryViewSet )
router.register(r'rentals', RentalViewSet)
router.register(r'payments', PaymentViewSet)


urlpatterns = [
    path('topfilms/', TopFilmsAPIView.as_view()),
    path('topcustomers/', TopCustomersAPIView.as_view()),
    path('', include(router.urls))
]
