import sys
from transformers import pipeline

pipe = pipeline("image-classification", "youngp5/skin-conditions")
# res = pipe("uploads/d47e4d12dc7b19dd44bab7c1a2592a4f.jpg")
res = pipe(sys.argv[1])

# print(sys.argv[1])
print(res[0]["label"])
sys.stdout(res[0]["label"])
# print(sys.argv[1][5:])