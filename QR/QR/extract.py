#!/usr/bin/env python3
# ECB plaintext extraction skeleton file for 50.042 FCS

# python extract.py -i letter.e -o decrypt.pbm -hh header.pbm

# Peh Jing Xiang 1004276 

import argparse

def getInfo(headerfile):
    with open(headerfile, 'rb') as f:
        header = f.read()
    return header

def extract(infile,outfile,headerfile):
    res = []
    done = False
    dic = {}
    
    with open(infile, 'rb') as fin:
        # Skip header. Start reading after header
        initial = fin.read(len(getInfo(headerfile)) + 1)
        
        while not done:
            eight_bytes = fin.read(8)
            if eight_bytes == b"":
                done = True
                break
            # Count the number of occurences of each byte
            dic[eight_bytes] = dic.get(eight_bytes,0) + 1
            res.append(eight_bytes)
    
    # Get the byte which appears the most number of times
    maximum_key = max(dic, key=dic.get)
    
    with open(headerfile, 'r') as f_header:
        header = f_header.read()
    
    with open(outfile, 'w') as fout:
        fout.write(header + '\n')
        
        # Assign the highest key count to 1, and the remaining one to 0
        for i in res:
            if i == maximum_key:
                fout.write('00000000')
            else:
                fout.write('11111111')
                
    
# Decrypted file 'decrypted_letter_e.pbm' will show 50.002 Security in white with black background. 
        
    
    

if __name__=="__main__":
    parser=argparse.ArgumentParser(description='Extract PBM pattern.')
    parser.add_argument('-i', dest='infile',help='input file, PBM encrypted format')
    parser.add_argument('-o', dest='outfile',help='output PBM file')
    parser.add_argument('-hh', dest='headerfile',help='known header file')

    args=parser.parse_args()
    infile=args.infile
    outfile=args.outfile
    headerfile=args.headerfile

    print('Reading from: %s'%infile)
    print('Reading header file from: %s'%headerfile)
    print('Writing to: %s'%outfile)

    success=extract(infile,outfile,headerfile)

            
