Prof Version

Solution code: main.py

How to find the flag:

The flag will be hidden in the QR code (located in images/qr_code.png)

The catch:

The QR code is split into half. 

The right half will be hidden behind a link. This link is encrypted using ECB with the key hidden behind DHKE.
To find the random private keys, the groups will have to use Baby-Step Giant-Step Method. The respective public keys will be made available to the groups.

After finding the random private keys, the groups will be able to get the shared key via the square and multiply method.
They can use the sharedkey to decrypt the ECB to find the plaintext link which will lead them to the right half of the qr code. 

The left half will also be encrypted with ECB. The key used to encrypt will be a random number smaller than 128. Groups can bruteforce using a for loop to get the decrypted image.

Once the groups have found both images, they will need to combine both qr code together to find the flag.

Files shown to the students:
encrypted_link.txt (Contains the encrypted google shared drive link)
encrypted_left_qr_code.ppm (Decrypt to obtain the left half of the qr code)

Link for right file: 
https://cyberctf1.vercel.app/qr_right_encrypted_ajgddhfiwifgweigfweif

Values shown to students (DHKE):
p = 1073741827 
α = 131

#Public Keys:
A = 592539029 
B = 138425493





