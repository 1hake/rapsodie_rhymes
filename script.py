#!/usr/bin/python
# -*- coding: utf-8 -*-
import json
import os
import sys

DATAPATH = './ressources'
OUTPATH = 'phoneme_dicts'

outname = os.path.join(OUTPATH, 'data.json')
phoneme_dict = {}
for fich in os.listdir(DATAPATH):
	key_name = fich.split('_')[2].split('.')[0]
	if key_name not in phoneme_dict:
		phoneme_dict[key_name] = {}
	# phoneme_dict = json.load(open(outname))
	with open(os.path.join(DATAPATH, fich), 'r') as fp:
		for line in fp:
			try:
				line = line.replace('\n', '')
				word = line.split(';')[0]
				phoneme = line.split(';')[1].split('.')
				phoneme_dict[key_name][word] = phoneme
			except Exception as e:
				print(e)
				print(line)

json.dump(phoneme_dict, open(outname, 'w'))