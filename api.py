
# import requests

# images=

# for i in range(1000):
#     response = requests.get('https://fakeface.rest/face/json')
#     images.append(response.json()['filename'])
#     print(i)

# file = open('data.txt','w')
# file.write(str(images))
# file.close()
# print(images)

file = open('data.txt','w')
file.write('img=[\n')
for i in img:
    file.write(str(i)+',\n')
file.write(']')
