# 50.042 FCS Lab 6 template
# Year 2021

# Peh Jing Xiang
# 1004276

import math
import primes
import dhke
import time


def baby_step(alpha, beta, p, fname):
    group_order = p - 1
    m = math.ceil(math.sqrt(group_order))
    
    with open(fname, "w") as f1:
        for i in range(m):
            output = (primes.square_multiply(alpha, i, p) * beta ) % p
            f1.write(str(output))
            f1.write(",")


def giant_step(alpha, p, fname):
    group_order = p - 1
    m = math.ceil(math.sqrt(group_order))
    
    with open(fname, "w") as f2:
        for i in range(m):
            output = primes.square_multiply(alpha, m * i, p)
            f2.write(str(output))
            f2.write(",")

def baby_giant(alpha, beta, p):
    file_1 = "baby_step.txt"
    file_2 = "giant_step.txt"
    
    group_order = p - 1
    m = math.ceil(math.sqrt(group_order))
    
    baby_step(alpha, beta, p, file_1)
    giant_step(alpha, p, file_2)
    res = []
    
    with open(file_1, "r") as f1:
        lst_1 = f1.read().split(",")
    
    with open(file_2, "r") as f2:
        lst_2 = f2.read().split(",")
        
    check = False
    xb = 0
    xg = 0
    
    for i in range(m):
        for j in range(m):
            if lst_1[i] == lst_2[j]:
                xb = i
                xg = j
                check = True
                break
        if check == True:
            break
    
    return  xg * m - xb
                

if __name__ == "__main__":
    """
    test 1
    My private key is:  264
    Test other private key is:  7265
    """

    p = 17851
    alpha = 17511
    A = 2945
    B = 11844
    sharedkey = 1671
    a = baby_giant(alpha, A, p)
    b = baby_giant(alpha, B, p) 
    guesskey1 = primes.square_multiply(A, b, p)
    guesskey2 = primes.square_multiply(B, a, p)
    print("Guess key 1:", guesskey1)
    print("Guess key 2:", guesskey2)
    print("Actual shared key :", sharedkey)
    
    
    ## Attack

    p, alpha = dhke.dhke_setup(20)
    print("Generate P and alpha:")
    print("P:", p)
    print("alpha:", alpha)
    print()
    a = dhke.gen_priv_key(p)
    b = dhke.gen_priv_key(p)
    print("My private key is: ", a)
    print("Test other private key is: ", b)
    print()
    A = dhke.get_pub_key(alpha, a, p)
    B = dhke.get_pub_key(alpha, b, p)
    print("My public key is: ", A)
    print("Test other public key is: ", B)
    print()
    sharedKeyA = dhke.get_shared_key(B, a, p)
    sharedKeyB = dhke.get_shared_key(A, b, p)
    print("My shared key is: ", sharedKeyA)
    print("Test other shared key is: ", sharedKeyB)
    print("Length of key is %d bits." % sharedKeyA.bit_length())
    
    print("\n###################")
    print("Attacking with Baby-Step Giant-Steps \n")
    start = time.time()
    guess_a = baby_giant(alpha, A, p)
    guess_b = baby_giant(alpha, B, p)
    guesskey1 = primes.square_multiply(A, guess_b, p)
    guesskey2 = primes.square_multiply(B, guess_a, p)
    end = time.time()
    print("Guess key 1:", guesskey1)
    print("Guess key 2:", guesskey2)
    print("Actual shared key :", sharedKeyA)
    print(f"For {sharedKeyA.bit_length()} key length bits, time taken is: {end-start}")

