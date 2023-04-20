from django.db import models

# Create your models here.
class Language(models.Model):
    language_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'language'


class Film(models.Model):
    film_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    release_year = models.IntegerField(blank=True, null=True)
    language = models.ForeignKey(Language, on_delete=models.CASCADE)
    rental_duration = models.SmallIntegerField()
    rental_rate = models.DecimalField(max_digits=4, decimal_places=2)
    length = models.SmallIntegerField(blank=True, null=True)
    replacement_cost = models.DecimalField(max_digits=5, decimal_places=2)
    rating = models.CharField(blank=True) 
    last_update = models.DateTimeField(auto_now=True)
    special_features = models.CharField(max_length=100,blank=True) 
    fulltext = models.TextField(blank=True)  

    class Meta:
        managed = False
        db_table = 'film'


class Category(models.Model):
    category_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=25)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'category'


class FilmCategory(models.Model):
    film = models.OneToOneField(Film, on_delete=models.CASCADE, primary_key=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'film_category'
        unique_together = (('film', 'category'),)


class Actor(models.Model):
    actor_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'actor'


class FilmActor(models.Model):
    actor = models.OneToOneField(Actor, on_delete=models.CASCADE, primary_key=True)  
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'film_actor'
        unique_together = (('actor', 'film'),)


class Country(models.Model):
    country_id = models.AutoField(primary_key=True)
    country = models.CharField(max_length=50)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'country'


class City(models.Model):
    city_id = models.AutoField(primary_key=True)
    city = models.CharField(max_length=50)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'city'


class Address(models.Model):
    address_id = models.AutoField(primary_key=True)
    address = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50, blank=True)
    district = models.CharField(max_length=20)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    postal_code = models.CharField(max_length=10, blank=True, null=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'address'


class Staff(models.Model):
    staff_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    email = models.EmailField(max_length=50, blank=True, null=True)
    store_id = models.SmallIntegerField()
    active = models.BooleanField()
    username = models.CharField(max_length=16)
    password = models.CharField(max_length=40, blank=True, null=True)
    last_update = models.DateTimeField(auto_now=True)
    picture = models.BinaryField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'staff'


class Store(models.Model):
    store_id = models.AutoField(primary_key=True)
    manager_staff = models.OneToOneField(Staff, on_delete=models.CASCADE)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'store'


class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    store_id = models.SmallIntegerField()
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.EmailField(max_length=50, blank=True, null=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    activebool = models.BooleanField()
    create_date = models.DateField(auto_now_add=True)
    last_update = models.DateTimeField(auto_now=True)
    active = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customer'


class Inventory(models.Model):
    inventory_id = models.AutoField(primary_key=True)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    store_id = models.SmallIntegerField()
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'inventory'


class Rental(models.Model):
    rental_id = models.AutoField(primary_key=True)
    rental_date = models.DateTimeField()
    inventory = models.ForeignKey(Inventory, on_delete=models.CASCADE)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    return_date = models.DateTimeField(blank=True, null=True)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    last_update = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'rental'
        unique_together = (('rental_date', 'inventory', 'customer'),)


class Payment(models.Model):
    payment_id = models.AutoField(primary_key=True)
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)
    rental = models.ForeignKey(Rental, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=5, decimal_places=2)
    payment_date = models.DateTimeField(auto_now=True)

    class Meta:
        managed = False
        db_table = 'payment'