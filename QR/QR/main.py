import math
import primes
import dhke
import time
import baby_step
import ecb

# Right Half of qr code:

#DHKE:

# Public Values
p = 1048573 
α = 98

print(f'\nP:{p}\na:{α}\n')

#Private keys:
a = 60
b = 94

#Public Keys:
A = primes.square_multiply(α,a,p)
B = primes.square_multiply(α,b,p)

print(f'Public Keys: \nA:{A} \nB:{B}\n')

#Shared Keys:
sharedkey = primes.square_multiply(B, a, p)
print(f'Shared Key: {sharedkey}\n')

# Encrypt link using ECB with present
ecb.ecb("link.txt", "encrypted_link.txt", sharedkey, 'e')

# Decrypt
ecb.ecb("encrypted_link.txt", "decrypted_link.txt", sharedkey, 'd')



# Steps to get sharedkey
guess_a = baby_step.baby_giant(α, A, p)
guess_b = baby_step.baby_giant(α, B, p) 
guesskey1 = primes.square_multiply(A, guess_b, p)
guesskey2 = primes.square_multiply(B, guess_a, p)
print("Guess key 1:", guesskey1)
print("Guess key 2:", guesskey2)
print("Actual shared key :", sharedkey)



# Left Half of qr code:

#Encrypt left qr code:
ecb.ecb("images/left_qr_code.jpg", "images/encrypted_left_qr_code.ppm", sharedkey, 'e')
# ecb.ecb("images/left_qr_code.ppm", "images/test.ppm", sharedkey, 'e')


#Decrypt left qr code:
ecb.ecb("images/encrypted_left_qr_code.ppm", "images/decrypted_left_qr_code.ppm", sharedkey, 'd')
# python extract.py -i images/test.ppm -o images/decrypt.ppm -hh header.ppm