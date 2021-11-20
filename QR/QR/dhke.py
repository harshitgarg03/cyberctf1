# 50.042 FCS Lab 6 template
# Year 2021

# Peh Jing Xiang
# 1004276

import primes
import random
import ecb


def dhke_setup(nb):
    p = 2 ** nb - 1
    a = random.randint(2, p - 2)
    return p,a


def gen_priv_key(p):
    private_key = random.randint(2, p - 2)
    return private_key


def get_pub_key(alpha, a, p):
    public_key = primes.square_multiply(alpha, a, p)
    return public_key


def get_shared_key(keypub, keypriv, p):
    shared_key = primes.square_multiply(keypub, keypriv, p)
    return shared_key


if __name__ == "__main__":
    p, alpha = dhke_setup(80)
    print("Generate P and alpha:")
    print("P:", p)
    print("alpha:", alpha)
    print()
    a = gen_priv_key(p)
    b = gen_priv_key(p)
    print("My private key is: ", a)
    print("Test other private key is: ", b)
    print()
    A = get_pub_key(alpha, a, p)
    B = get_pub_key(alpha, b, p)
    print("My public key is: ", A)
    print("Test other public key is: ", B)
    print()
    sharedKeyA = get_shared_key(B, a, p)
    sharedKeyB = get_shared_key(A, b, p)
    print("My shared key is: ", sharedKeyA)
    print("Test other shared key is: ", sharedKeyB)
    print("Length of key is %d bits." % sharedKeyA.bit_length())
    
    print("\nCreating plaintext.txt ...")
    
    with open("plaintext.txt", "w") as f1:
        f1.write("Challenges are what make life interesting and overcoming them is what makes life useful.")
        print("Plaintext message: Challenges are what make life interesting and overcoming them is what makes life useful.")
        
    print("\nEncrypting plaintext message with SharedKeyA...\n")
        
    cipher = ecb.ecb("plaintext.txt", "cipher.txt", sharedKeyA, "e" )
    
    with open("cipher.txt", "rb") as f2:
        output = f2.read()
        print("cipher text is: " + str(output))
    
    print("\nDecrypting cipher text with SharedKeyB...\n")
    
    decrypted = ecb.ecb("cipher.txt", "decrypted.txt", sharedKeyB, "d")
    
    with open ("decrypted.txt", "r") as f3:
        output = f3.read()
        print("Decrypted message is: " + output)
   
    
