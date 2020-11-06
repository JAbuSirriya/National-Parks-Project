# National Parks Project

<!-- NOTES, NEED TO EXPAND ON LATER  -->

## Use of Application

This national parks application allowes users to see every U.S. National Park on the homepage. Content is displayed about every national park on this page. If the user wants to find out more informaiton about a certain park, then they visit each park's individual page. A park's individual page provides the user more information about the national park. Furthermore, the use is able to write, edit, and delete their own comment. 


## Roadblocks 

Seeding the data locally from the National Parks API was my first roadblock. I struggled to find the correct path for each data piece in the API (such as park name, park description, park image). The process was difficult because the API contained 497 national parks, and each park object contained large amounts of information. 

Additionally, a number of parks contained missing data (such as missing images) which prevented me from seeding the data. I used a ternary to solve this issue by stating that when the image object contains data then it should use it, and while data missing apply a general image link to the image object. 


Searching for parks on the main page was also a roadblock. I would search 'Lincoln' which would return back incorrect results because a Lincoln is not the full name of a park and the upcase 'L' caused problems for the search. For this reason, I used Javascript regular expressions (regex) to match string character combinations. With regex I stated that the user's search input should be lowercase and that it should match the search input with any of the park names. For instance, if you search "badl" then "Badlands National Park should show on the main page.   



## If More Time Permitted
I would have created a favorites page which would give the user an opportunity to add certain parks to their favorites list. The user's favorite list would have only been available if user logged in to their account. 

I also would have liked to incorporate the  Google maps API, so that I could display a map of all the U.S. National Parks. 


## Conclusion

Provided is the link to my project on Heroku: https://jabusirriya-project-two.herokuapp.com/