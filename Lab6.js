//Ex 2 q4
db.getCollection("Restaurants").find(
    {"cuisine": {$eq: "Japanese"} },
    {"_id": 1, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1}
    ).sort({"restaurant_id": 1})

//Ex 3 q2
db.getCollection("Restaurants").find(
    {$and: [{"cuisine": {$eq: "Delicatessen"}},
    {"city":{ $ne: "Brooklyn"}}]},
    {"_id": 0, "cuisine": 1, "name": 1, "city": 1}
    ).sort({"name":1})

//Ex 4
db.getCollection("Restaurants").find(
    {$and: [{"cuisine": {$in: ["Bakery", "Chicken", "Hamburgers", "American"]}},
    {"restaurant_id": {$gt: "4000000"}},
    {"city":{ $ne: "Brooklyn"}}]},
    {"_id": 0, "cuisine": 1, "name": 1, "city": 1, "restaurant_id": 1}
    ).sort({"restaurant_id": -1})

//Ex5
db.getCollection("Restaurants").find(
    {$or: [{"name": /Thai$/}, {"address.street": /Street$/}, {"address.zipcode": {$eq: "17988"}}]})






