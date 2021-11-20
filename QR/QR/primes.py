# 50.042 FCS Lab 6 template
# Year 2021

# Peh Jing Xiang
# 1004276

import random
def square_multiply(a,x,n):
    res = 1
    
    for i in bin(x)[2:]:
        res = res * res % n
        
        if (i == '1'):
            res = res * a % n
    return res


def miller_rabin(n, a):

    # n - 1 = 2^r * d
    # d must be odd
    
    r = 0
    d = n - 1
    
    # check if d is odd by factoring out powers of 2 from n - 1
    while (d % 2 == 0):
        d = d // 2
        r += 1
        
    # Witness Loop, repeat a times
    for i in range(a):
        random_num = random.randint(2, n-2)
        res = square_multiply(random_num,d,n)
        
        if res == 1 or res == n - 1:
            continue
        
        # repeat r - 1 times
        check_continue = False
        i = 0
        for i in range(r - 1):
            res = res ** 2 % n
            
            if res == n - 1:
                check_continue = True
                break
        if check_continue == True:
            continue
        return False
    return True

def gen_prime_nbits(n):
    check = False
    
    while not check:
        generator = random.randint(1, 2**n - 1)
        check = miller_rabin(generator, 2)
    return generator

if __name__=="__main__":
    print('Is 561 a prime?')
    print(miller_rabin(561,2))
    print('Is 27 a prime?')
    print(miller_rabin(27,2))
    print('Is 61 a prime?')
    print(miller_rabin(61,2))

    print('Random number (100 bits):')
    print(gen_prime_nbits(100))
    print('Random number (80 bits):')
    print(gen_prime_nbits(80))
