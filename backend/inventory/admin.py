from django.contrib import admin
from .models import Usuario, Categoria, Objeto, Supervisor, Prestamo

# Registrando el modelo Usuario
@admin.register(Usuario)
class UsuarioAdmin(admin.ModelAdmin):
    list_display = ['rut_usuario', 'nombre_usuario', 'apellido_usuario', 'correo_usuario']

# Registrando el modelo Categoria
@admin.register(Categoria)
class CategoriaAdmin(admin.ModelAdmin):
    list_display = ['id_categoria', 'nombre_categoria']

# Registrando el modelo Objeto
@admin.register(Objeto)
class ObjetoAdmin(admin.ModelAdmin):
    list_display = ['numero_uv_objeto', 'nombre_objeto', 'cantidad_objeto', 'id_categoria']

# Registrando el modelo Supervisor
@admin.register(Supervisor)
class SupervisorAdmin(admin.ModelAdmin):
    list_display = ['rut_supervisor', 'nombre_supervisor', 'apellido_supervisor', 'correo_supervisor']

# Registrando el modelo Prestamo
@admin.register(Prestamo)
class PrestamoAdmin(admin.ModelAdmin):
    list_display = ['id_prestamo', 'rut_usuario', 'rut_supervisor', 'fecha_inicio', 'fecha_termino', 'cantidad_prestada', 'estado_prestamo']
