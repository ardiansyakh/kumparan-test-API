# Dokumentasi API riliv-test-API
## Database
```
kumparan
```
### HTTP REQUEST
***BASE URL:***
```
http://localhost:(port)/ || 
```

## get all articles
- **URL:**
```
/articles
```
- **METHOD:**
```
get
```
- **query:**
```
query, author
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "current_page": 1,
        "count": 1,
        "data": [
            {
                "_id": "6220c5031f4ac00f36da9086",
                "author": "romanova",
                "title": "kumparan test",
                "body": "test node API",
                "created": "2022-03-03T13:39:15.469Z"
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## get detail article
- **URL:**
```
/article
```
- **METHOD:**
```
get
```
- **params:**
```
id
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
      "_id": "6220c5031f4ac00f36da9086",
      "author": "romanova",
      "title": "kumparan test",
      "body": "test node API",
      "created": "2022-03-03T13:39:15.469Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## create new article
- **URL:**
```
/article
```
- **METHOD:**
```
post
```
- **BODY:**
```
{
    "author": "romanova",
    "title": "ora",
    "body": "ora ora"
}
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
      "_id": "6220c5031f4ac00f36da9086",
      "author": "romanova",
      "title": "kumparan test",
      "body": "test node API",
      "created": "2022-03-03T13:39:15.469Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```
