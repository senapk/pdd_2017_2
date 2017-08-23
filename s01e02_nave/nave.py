import random

class OVNI:
    def __init__(self, label, x, vida):
        self.label = label
        self.x = x
        self.vida = vida
        self.vivo = True

    def andar(self):
        if(random.randint(0, 1) == 0):
            self.x = self.x - 1
        else:
            self.x = self.x + 1

    def apanhar(self, forca):
        self.vida -= forca
        if self.vida <= 0:
            self.vivo = False

    def __str__(self):
        return self.label + " " + str(self.x) \
             + " (" + str(self.vida) + ")"

class Nave:
    def __init__(self, x, forca):
        self.x = x
        self.forca = forca

    def atirar(self, lista_ovni):
        for ovni in lista_ovni:
            if ovni.x == self.x:
                ovni.apanhar(self.forca)

    def mover(self, desl):
        self.x += desl

    def __str__(self):
        return "Nave:" + str(self.x)

nave = Nave(5, 1)

lista = [OVNI("x", 2, 4), OVNI("y", 6, 8)]

while(True):
    print(nave)
    for x in lista:
        print(x)
    escolha = input("dea: ")
    if escolha == "d":
        nave.mover(1)
    elif escolha == "e":
        nave.mover(-1)
    elif escolha == "a":
        nave.atirar(lista)
    for x in lista:
        x.andar()
