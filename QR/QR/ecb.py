#!/usr/bin/env python3
# ECB wrapper skeleton file for 50.042 FCS

# python ecb.py -i Tux.ppm -o out.ppm -k 4 -m e
# python ecb.py -i out.pbm -o de.pbm -k 4 -m d


# Peh Jing Xiang 1004276 


from present import *
import argparse

nokeybits=80
blocksize=64

def ecb(infile, outfile, key, mode):
    res = []
    
    # padding is 64 bits of 1s. Extra bits will be 1s
    padding = (2**64-1)
    
    with open(infile, 'rb') as fin:
        
        done = False
        
        while not done:
            # read 8 bytes at a time
            eight_byte = fin.read(8)
            if eight_byte == b"":
                done = True
                break
            # convert 8 bytes into 64 bits
            interim = int.from_bytes(eight_byte, byteorder='big')
            
            # Encrypt or decrypt based on mode. Append result to res variable
            if mode == 'e' or mode == 'E':
                res.append(present(interim, int(key)))
            elif mode == 'd' or mode == 'D':
                res.append(present_inv(interim,int(key)))
            else:
                print("Mode Error! Please specify e or d")
        
    with open(outfile, 'wb') as fout:
        # for every byte in res, convert to bytes and write to file. Paddimg is applied using the 'and' operator
        for i in res:
            fout.write((i & padding).to_bytes(8, byteorder='big'))

    
            
    

if __name__=="__main__":
    parser=argparse.ArgumentParser(description='Block cipher using ECB mode.')
    parser.add_argument('-i', dest='infile',help='input file')
    parser.add_argument('-o', dest='outfile',help='output file')
    parser.add_argument('-k', dest='keyfile',help='key file')
    parser.add_argument('-m', dest='mode',help='mode')

    args=parser.parse_args()
    infile=args.infile
    outfile=args.outfile
    keyfile=args.keyfile
    mode = args.mode

    ecb(infile,outfile,keyfile,mode)

