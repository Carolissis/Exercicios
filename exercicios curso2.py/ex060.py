#Fatorial de um numero 

n = int(input('Digite um numero: '))
c = n
f = 1

print('Calculando {}! '.format(n), end='')
while c > 0:
    print('{}'.format(c), end='')
    print(' X ' if c > 1 else ' = ',end='')
    f *= c
    c -=1
print('{}'.format(f),end='')