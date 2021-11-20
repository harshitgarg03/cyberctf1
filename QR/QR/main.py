import math
import primes
import dhke
import time
import baby_step
import ecb

# Right Half of qr code:
print(f'Right Qr Code Encryption and Decryption ----------------------------------')
# DHKE:

# Public Values
# 2 ^ 30
p = 1073741827 
α = 131

print(f'\nP:{p}\na:{α}\n')

#Private keys:
a = 104124
b = 10385173

#Public Keys:
A = primes.square_multiply(α,a,p)
B = primes.square_multiply(α,b,p)

print(f'Public Keys: \nA:{A} \nB:{B}\n')

#Shared Keys:
sharedkey = primes.square_multiply(B, a, p)
print(f'Shared Key: {sharedkey}\n')

# Encrypt link using ECB with present
print(f'Encrypting link using ECB')
ecb.ecb("link.txt", "encrypted_link.txt", sharedkey, 'e')
print(f'Encryption Completed\n')

# Decrypt
print(f'Decrypting link using ECB')
ecb.ecb("encrypted_link.txt", "decrypted_link.txt", sharedkey, 'd')
print(f'Decryption Completed\n')
print(f'Decrypted link is:\nhttps://cyberctf1.vercel.app/qr_right_encrypted_ajgddhfiwifgweigfweif\n')


# Steps to get sharedkey
guess_a = baby_step.baby_giant(α, A, p)
guess_b = baby_step.baby_giant(α, B, p) 
guesskey1 = primes.square_multiply(A, guess_b, p)
guesskey2 = primes.square_multiply(B, guess_a, p)
print("Guess key 1:", guesskey1)
print("Guess key 2:", guesskey2)
print("Actual shared key :", sharedkey)



# Left Half of qr code:
print(f'\nLeft Qr Code Encryption and Decryption ----------------------------------\n')

# Key is smaller than 128

qr_key = 37

#Encrypt left qr code:
print(f'Encrypting left qr code using ECB')
ecb.ecb("images/left_qr_code.jpg", "images/encrypted_left_qr_code.jpg", qr_key, 'e')
print(f'Encryption Completed\n')


#Decrypt left qr code:
print(f'Decrypting link using ECB')
for i in range(128):
    ecb.ecb("images/encrypted_left_qr_code.jpg", "test_images/img"+ str(i) + ".jpg", i, 'd')
    print(f'Decrypting image {i}')
print(f'Decryption Completed\n')
print(f'Decrypted image is found at image number 37\n')
