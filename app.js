// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


import random
import tkinter as tk
from tkinter import messagebox

class JuegoAmigoSecreto:
    def __init__(self):
        self.ventana = tk.Tk()
        self.ventana.title("Juego de Amigo Secreto")
        self.participantes = []
        self.etiqueta_nombre = tk.Label(self.ventana, text="Ingrese el nombre del participante:")
        self.etiqueta_nombre.pack()
        self.entrada_nombre = tk.Entry(self.ventana)
        self.entrada_nombre.pack()
        self.boton_anadir = tk.Button(self.ventana, text="Añadir", command=self.anadir_participante)
        self.boton_anadir.pack()
        self.etiqueta_mensaje = tk.Label(self.ventana, text="")
        self.etiqueta_mensaje.pack()
        self.boton_sortear = tk.Button(self.ventana, text="Sortear amigos secretos", command=self.sortear_amigos_secretos)
        self.boton_sortear.pack()
        self.etiqueta_resultado = tk.Label(self.ventana, text="")
        self.etiqueta_resultado.pack()

    def anadir_participante(self):
        nombre = self.entrada_nombre.get()
        nombre = nombre.strip()  # Elimina espacios en blanco al inicio y final
        if nombre == "":  # Verifica si el nombre está vacío
            messagebox.showerror("Error", "No se puede dejar el nombre en blanco.")
        elif not nombre.isalpha():  # Verifica si el nombre contiene caracteres no alfabéticos
            messagebox.showerror("Error", "El nombre solo puede contener letras.")
        elif len(nombre) < 2:  # Verifica si el nombre tiene al menos 2 letras
            messagebox.showerror("Error", "El nombre debe tener al menos 2 letras.")
        elif nombre in self.participantes:  # Verifica si el nombre ya existe en la lista
            messagebox.showerror("Error", "El nombre ya existe en la lista de participantes.")
        else:
            self.participantes.append(nombre)
            self.etiqueta_mensaje.config(text="Añadido")
            self.entrada_nombre.delete(0, tk.END)

    def sortear_amigos_secretos(self):
        if len(self.participantes) < 2:
            messagebox.showerror("Error", "Debe haber al menos 2 participantes para sortear.")
        else:
            random.shuffle(self.participantes)
            resultado = ""
            for i in range(len(self.participantes)):
                resultado += f"{self.participantes[i]} es el amigo secreto de {self.participantes[(i+1) % len(self.participantes)]}\n"
            self.etiqueta_resultado.config(text=resultado)

    def run(self):
        self.ventana.mainloop()

if __name__ == "__main__":
    juego = JuegoAmigoSecreto()
    juego.run()

