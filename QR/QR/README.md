Prof Version

How to find the flag:

The flag will be hidden in the QR code (located in images/qr_code.png)

The catch:

The QR code is split into half. 

The right half will be hidden behind a goole drive shared link. This link is encrypted using ECB with the key hidden behind DHKE.
To find the random private keys, the groups will have to use Baby-Step Giant-Step Method. The respective public keys will be made available to the groups.

After finding the random private keys, the groups will be able to get the shared key via the square and multiply method.
They can use the sharedkey to decrypt the ECB to find the plaintext goole drive shared link which will lead them to the right halve of the qr code. 

The left half will also be encrypted with ECB. The key used to encrypt will be the same as the key used to decrpyt to find the right half.

Once the groups have found both images, they will need to combine both qr code together to find the flag.

Files shown to the students:
encrypted_link.txt (Contains the encrypted google shared drive link)
encrypted_left_qr_code.ppm (Decrypt to obtain the left half of the qr code)

Values shown to students (DHKE):
p = 1048573 
α = 98

#Public Keys:
A = primes.square_multiply(α,a,p)
B = primes.square_multiply(α,b,p)

Google Drive link for right file: 
https://drive.google.com/file/d/1Jvfs7rgqMpsL_ZcGoamda1vGcDvs8Q-d/view?usp=sharing



