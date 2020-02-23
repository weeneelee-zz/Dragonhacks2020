# L'amour
Making Food Matters

![screenshot](https://raw.githubusercontent.com/weeneelee/Dragonhacks2020/master/L'amour.png)

**Inspiration

Food brings people together and unites us as a team. We often find ourselves being spoilt for choice when it comes to food. It is not uncommon to lose track of the existing groceries that we already have at home, leaving our fresh vegetables to wilt and ending up with half a carton of milk that is past its expiry date. Our team realized that this brings about food wastage which is a far-reaching global problem with tremendous financial, ethical and environmental cost. Thus, we decided to come up with an interactive mobile application to help users better manage their food inventory.

**What it does

The mobile application will give users the ability to keep track, utilize or donate their pantry contents. This can be done in 2 ways. The user can just take a picture of their receipt which will be upload to our backend and that is where the magic happens. The backend will extract the text from the image using tesseractJS, which is a test recognition and extraction engine, and compare the filtered and tokenize sets of words to the matching item into our database. Additionally, the matching data along with its properties will be used to update the user pantry data. Another way the user can keep track of their pantry is by manually adding items directly into the app. Furthermore, The user will receive sets of recipe that could utilize near expiring items in their inventory whenever the system knows that the items will expire soon. Finally, the user will be able to donate to food donation locations around him by getting a map that shows the locations directly in the application.

**How we built it

The mobile application is built on Android Studio using Java. The data set is being stored on Google Cloud. The back-end is coded using NodeJS, Express, TesseractJS, LowDB.

**Challenges we ran into

In order for the mobile application be able to extract data from a receipt, a database containing the common list of groceries and the length of shelf-life must be created. It was difficult to advise users on the length of time the that their groceries would last without knowing how they are going to store their groceries (leaving it out to stand or placing them in the refrigerator.)
Accomplishments that we're proud of
We managed to come up with a fully-formed idea and hacked away to develop an Android application within 20 hours. We feel quite accomplished with the amount of work that the three of us have covered especially after one of the member left us abruptly for his own project halfway during the hackathon.

**What we learned

We learned that food wastage is a persistent global issue and there have not been solutions which are aimed at preventing food wastage from the perspective of an individual's daily life (such as, what do I do with ingredients that are going to be expired? / what if I no longer want to use this brand new in package snap peas anymore?)

We learned the importance of crisis management. The departure of our team member taught us what it meant to be a responsible team player and this pushes the limits of everyone's skills as the same workload has to be divided among three people now.

**What's next for L'amour

Strengthening a community within one's neighborhood through food Apart from donating unused groceries before its expiry date, users could choose to upload a photo of their unused grocery on a forum that is exclusively to the other users within their neighborhood. This allows users to give away their fresh and unused groceries to their neighbors.

Including calorie count per serving of ingredient As the saying goes, you are what you eat. The implementation of calorie count per serving would serve as a gentle reminder to users to be mindful of the food that they are eating. Thus, encouraging users to cultivate a habit of healthy eating.

** Built With
android-studio
express.js
google-cloud
java
javascript
lowdb
node.js
tesseract
