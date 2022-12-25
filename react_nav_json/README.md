# install server 
npm install -g json-server

# Start JSON Server

json-server --watch db.json --port=3005

sample data
{
  "students": [
    {
      "id": 1,
      "name": "itay",
      "number": 1995,
      "age": 12,
      "img": "p1.jpg"
    },
    {
      "id": 5,
      "name": "yoed",
      "number": 1998,
      "age": 122,
      "img": "p2.jpg"
    },
    {
      "id": 6,
      "name": "jacob",
      "number": 2005,
      "age": 62,
      "img": "p3.jpg"
    }
    ]
}
