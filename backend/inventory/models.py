from django.db import models

# Usuario model
class Usuario(models.Model):
    rut_usuario = models.CharField(max_length=12, primary_key=True)
    nombre_usuario = models.CharField(max_length=100)
    apellido_usuario = models.CharField(max_length=100)
    correo_usuario = models.EmailField()

# Categoria model
class Categoria(models.Model):
    id_categoria = models.AutoField(primary_key=True)
    nombre_categoria = models.CharField(max_length=100)

# Objeto model
class Objeto(models.Model):
    numero_uv_objeto = models.AutoField(primary_key=True)
    nombre_objeto = models.CharField(max_length=100)
    fotografia_objeto = models.ImageField(upload_to='objetos/')
    cantidad_objeto = models.IntegerField()
    id_categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    # Assuming Prestamo has a OneToOne relationship with Objeto
    

# Supervisor model
class Supervisor(models.Model):
    rut_supervisor = models.CharField(max_length=12, primary_key=True)
    nombre_supervisor = models.CharField(max_length=100)
    apellido_supervisor = models.CharField(max_length=100)
    correo_supervisor = models.EmailField()

# Prestamo model
class Prestamo(models.Model):
    id_prestamo = models.AutoField(primary_key=True)
    rut_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    rut_supervisor = models.ForeignKey(Supervisor, on_delete=models.CASCADE)
    fecha_inicio = models.DateField()
    fecha_termino = models.DateField()
    cantidad_prestada = models.IntegerField()
    estado_prestamo = models.CharField(max_length=100)
    objetos = models.ManyToManyField(Objeto, through='DetallePrestamo')

class DetallePrestamo(models.Model):
    objeto = models.ForeignKey(Objeto, on_delete=models.CASCADE)
    prestamo = models.ForeignKey(Prestamo, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    
class Meta:
    unique_together = [['objeto', 'prestamo']] 