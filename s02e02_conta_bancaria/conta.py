class Operacao:
	def __init__(self, descricao = "", valor = 0):
		self.descricao = descricao
		self.valor = valor
		
class Conta:
	def __init__(self, id):
		self.id = id
		self.saldo = 0.0
		self.historico = []
		
	def saque(self, valor):
		if self.saldo < valor:
			return False
		self.saldo -= valor
		self.historico.append(Operacao("saque", -valor))
		return True
	
	def deposito(self, valor):
		if valor < 0 :
			return
		self.saldo += valor
		self.historico.append(Operacao("deposito", +valor))
		
	def getSaldo(self):
		return self.saldo
		
	def getExtrato(self):
		return self.historico
	

def main():
	op = [""]
	conta = Conta(0)
	
	while op[0] != "fim":
		op = input("Digite comando ou digite help").split()
		
		if op[0] == "help":
			print("saque _valor")
			print("deposito valor")
			print("saldo")
			print("extrato")
			print("iniciar _id")
			
		if op[0] == "iniciar":
			conta = Conta(op[1])
		
		if op[0] == "saldo":
			print("seu saldo eh ", conta.getSaldo())
			
		if op[0] == "saque":
			if conta.saque(float(op[1])):
				print("saque realizado")
			else:
				print("fundos insuficientes")
		
		if op[0] == "deposito":
			conta.deposito(float(op[1]))
			
		if op[0] == "extrato":
			extrato = conta.getExtrato()
			for ope in extrato:
				print(ope.descricao, "-", ope.valor)
		 
main()
	
	
	
	
	
	
	



