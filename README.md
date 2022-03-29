# Esperanto

### General Assembly Project 3

<img width="1429" alt="Screen Shot 2022-03-29 at 15 38 55" src="https://user-images.githubusercontent.com/91087641/160637409-f62026c7-5ec4-4fe3-bfe0-f2f056ec430e.png">

## Table of Contents

- [Brief](#brief)
- [Deployment](#deployment)
- [Team](#team)
- [Concept](#concept)
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Process](#process)
- [Planning](#planning)
- [Creating the Backend with Express and MongoDB](#creating-the-backend-with-express-and-mongodb)
- [Creating the Frontend with React](#creating-the-frontend-with-react)
- [Project Walkthough](#project-walkthrough)
- [Challenges and Wins](#challenges-and-wins)
- [Future Improvements](#future-improvements)
- [Key Learnings](#key-learnings)
- [Contact](#contact)


## Brief 

Build a **full stack** application by creating your own **backend** and **frontend**.

Use an **Express API** to serve your data created with **MongoDB** , **Mongoose** and **Node**.

Consume your **API** with a separate **frontend** built with **React**.

Be a complete product which most likely means **multiple relationships** and **CRUD functionality** for at least a couple of **models**.

Have a **visually impressive design**

Group Project (4 People) 

Timeframe: 7 days

## Deployment

Please follow this link to view the Project: https://new-esperanto.herokuapp.com/

Repository link: https://github.com/PeterBid/Esperanto

## Team

#### • [Peter Bid (Me)](https://github.com/PeterBid) 

#### • [Ali Ali](https://github.com/alibeniaminali)

#### • [Dougie Brown](https://github.com/Dougie-b)

#### • [Elena Gicheva](https://github.com/ElenaGicheva)

## Concept

Esperanto is a platform to help people find and book language teachers across a wide range of international languages for one to one online education. 

Users can also rate and review teachers as well as signing up to be a teacher themselves.

As a team of developers ranging from diverse international backgrounds interested in languages, we wished to create a language education platform. We used an existing language site Italki as a template for which to form our ideas, however we wished to make an even "cleaner" version of this site visually.

Even the name of our app, the Esperanto, was inspired by the wish for international communication. We thought this was a consistent and clear way to brand the purpose of our platform.

This is a full stack application built with Express, MongoDB and React. It was also my first experience creating a back end.

The whole application was built over 7 days in a team of four devs.

## Installation

* Clone repo or download zip
* run yarn install in root folder to install all backend dependencies
* cd client and run yarn install to install frontend dependencies
* run yarn seed to seed the database
* yarn build & yarn dev and head to localhost:4000 to view the site
* To test authenticated user you may register with a test user or use melon@email.com and password pass

## Technologies Used

#### Frontend

* React
* Axios
* React Bootstrap
* SCSS
* CSS

#### Backend

* Node.js
* MongoDB
* Mongoose
* Express
* Bcrypt
* JsonWebToken

#### Development tools

* Visual Studio Code
* Insomnia
* Yarn
* Git (branching) & GitHub
* Google Chrome development tools
* Cloudinary
* Asana (planning)
* Canva (for images)
* Zoom
* Slack
* Heroku (deployment)

## Process

### Planning

We have spent the first day deciding on an idea as well as planning our project thoroughly with building wireframes, alongside the models, schemas and axios requests required for the project.

We then also made an Asana Board to track, short term and stretch goals we should be working on each day for the project. Using Asana also helped us to designate who would be working on certain aspects of the project.

It considerably helped us to be organised, knowing exactly what features we were building and when helped make the overall process smoother.

#### Wire Frame

![project-3-plan (1)](https://user-images.githubusercontent.com/91087641/160674911-e407fea4-db47-4b72-aacf-6ea4d944604a.png)

![Screen Shot 2022-03-29 at 18 57 58](https://user-images.githubusercontent.com/91087641/160675555-f8f86ecb-cab5-4efd-a221-c8f1b7247206.png)

![Screen Shot 2022-03-29 at 18 58 14](https://user-images.githubusercontent.com/91087641/160675576-9672f727-0ece-42f7-b65f-ebb3c82f1a4d.png)

![Screen Shot 2022-03-29 at 18 57 20](https://user-images.githubusercontent.com/91087641/160675612-14e74d04-2521-433d-9b7a-387c0c4cf79e.png)


### Creating the Backend with Express and MongoDB

We created our backend together so that there was no confusion about any models and databases, but also to reinforce our knowledge of concepts. his process went very smoothly. After installing the necessary dependencies and setting up the basic middleware necessary to have a server running. We then began to build the different schemas for users, teachers and reviews.

#### Models

The Teacher Schema as well as containing a large range of fields, also contained an attached many to one Review model to implement the use of multiple reviews for each individual teacher. 

We ensured the display picture would be a string in order for us to convert the image url of uploaded images with `Cloudinary`.

![Screen Shot 2022-03-29 at 19 14 09](https://user-images.githubusercontent.com/91087641/160678792-2df70332-0a8a-4233-abd3-17fdb9d1763b.png)

The User `Schema` consisted of basic login details, username, email, password and confirmation. 

We also have a `virtual field` of owned "teachers" that the user creates on the site, this would allow for permission checks for editing and deleting the page they have made for themselves when they have added themselves as a teacher. 

We also used `bcrypt` to hash passwords that a user has made to login.

![Screen Shot 2022-03-29 at 19 47 42](https://user-images.githubusercontent.com/91087641/160683982-a33ee6b9-71f2-4e56-8718-62e639963a82.png)

![Screen Shot 2022-03-29 at 19 47 54](https://user-images.githubusercontent.com/91087641/160684011-94c7f06c-ebe4-4a27-aaf8-8a23dab148e9.png)

#### Authentication

We used `JsonWebToken` to create a controller which would check if the user was valid. This was then used alongside a secure route which verified users using the token.

![Screen Shot 2022-03-29 at 19 54 25](https://user-images.githubusercontent.com/91087641/160684513-aa9e9f6b-901f-4af6-8a55-0f7136e2ab29.png)

![Screen Shot 2022-03-29 at 19 54 33](https://user-images.githubusercontent.com/91087641/160684546-1c2e2684-eb51-4615-b35a-d2940991b25c.png)

#### Controllers and Routes

We created each api request and the endpoints needed for the project and which controller request types `GET`, `PUT`, `POST`, `DELETE` should be assigned to each of them.

The last thing we had to do was to add middleware and decide which routes didn't require authentication and which routes required a `secureRoute` to give permission to certain endpoints so that users can only edit/delete reviews or change the teacher they have created themselves.

![Screen Shot 2022-03-29 at 20 08 23](https://user-images.githubusercontent.com/91087641/160688371-1e184f86-8109-469a-a542-1e74cca62a28.png)

![Screen Shot 2022-03-29 at 20 09 09](https://user-images.githubusercontent.com/91087641/160688597-71cbef86-e928-4d73-894f-f63ff7401cfd.png)

We double-checked all our routes while creating them using `Insomnia`, ensuring that we could log in, register, and check the authentication permissions using token authorization.

<img width="958" alt="Screen Shot 2022-03-29 at 19 53 03" src="https://user-images.githubusercontent.com/91087641/160689111-5233e873-85fa-4750-b152-45526acbbc53.png">


### Creating the Frontend with React

#### Creating Components

We created a React app and connected to the database. We then created all the components that we were planning to use and connected them using the React Router DOM together. 

After this point we then individually focused on specific components individually to create the elements that would make up each individual component. 

However everyone contributed to parts of each component still, helping each other out with aspects they had greater expertise in.

#### Home

Alongside displaying information about the website, we created a 'state' of languages in conjunction with a `Get` request to create a `useEffect` for a `countLangauges` function.

This meant that the number of languages displayed on the home page would dynamically update with each brand new language taught by a teacher added to the database.


![Screen Shot 2022-03-29 at 20 22 24](https://user-images.githubusercontent.com/91087641/160691504-ba939765-1362-435f-87f2-7bd569b63394.png)

<img width="834" alt="Screen Shot 2022-03-29 at 20 26 00" src="https://user-images.githubusercontent.com/91087641/160691732-f9a7a6e3-1f06-4f35-936b-365579d82be7.png">

#### TeachersList

For displaying the teachers, after using a `get` axios request to receive the data we used the `map` method alongside `bootstrap` `rows` and `cols` to display the data from each teacher in cards. 

Calling the `length` of the teachers array allows the numbers of teachers available on the site to dynamically update.

* Filtering

A `useState` of `searchTerm` alongside a text form targeting what users typed as a search term for language taught was used to create a function to filter out results for the map.

This was used alongside another filter, a `select` form attached to an `handleChange` event listener which updated the teachers filtered from the array in accordance to the `pricePerHour` value.

Placing both of these filters before the `map` allowed both filters to be applied to the teachers the mapped in the return.

![Screen Shot 2022-03-29 at 20 45 15](https://user-images.githubusercontent.com/91087641/160694905-fbdff330-aa2f-4f20-ab4d-2b15805c3152.png)

![Screen Shot 2022-03-29 at 20 44 59](https://user-images.githubusercontent.com/91087641/160694956-35ff793d-6951-47aa-b18a-f129a4bf73af.png)

![Screen Shot 2022-03-29 at 20 45 35](https://user-images.githubusercontent.com/91087641/160695037-5f4495b1-3cf4-45e5-a4c1-f134f8fb474c.png)

<img width="1153" alt="Screen Shot 2022-03-29 at 20 48 43" src="https://user-images.githubusercontent.com/91087641/160695248-08f5b08a-4858-4980-b72e-d74ed6e95be6.png">

#### TeachersProfile

We used the `id` of each teacher on the teacher list page , to create a `teacherID` which then when used with `useParams`, created links to the `TeachersProfile` component. If a user clicks to view the profile of an individual teacher, they are redirected to a page with detailed information about that teacher. 

This is then used to return specific information related to each teacher. However if the user is not registered or logged in they are instead prompted to login.

Reviews added about the teacher also appear on the individual teacher page by using a `map` in the return. Users can add their own reviews by using a form which sends a `POST` request `onSubmit`. If the user created the review a button appears where they can also delete that review. This by implementing a `userIsOwner` function which checks the `payload`.

If the Teacher was added by the user they can also edit and delete the page itself with buttons becoming available with `Put` and `Delete` requests `onClick`.

![Screen Shot 2022-03-29 at 22 07 49](https://user-images.githubusercontent.com/91087641/160707654-00502c74-f893-497f-a009-9782c1926698.png)

![Screen Shot 2022-03-29 at 22 08 31](https://user-images.githubusercontent.com/91087641/160707683-06652c28-4102-452d-974b-6a889b2b9263.png)

![Screen Shot 2022-03-29 at 22 09 16](https://user-images.githubusercontent.com/91087641/160707709-9d9c8b3a-2a43-4314-9c99-71e32c5cf0ad.png)

<img width="1409" alt="Screen Shot 2022-03-29 at 21 58 19" src="https://user-images.githubusercontent.com/91087641/160707736-c87f7214-6053-4294-9fe0-e2922693dd76.png">

<img width="1405" alt="Screen Shot 2022-03-29 at 21 58 29" src="https://user-images.githubusercontent.com/91087641/160707767-957a000d-aaed-41a3-b530-46fe9951e32c.png">

#### AddTeacher and using Cloudinary

When a user is logged in an option to "become a teacher" appears in the nav bar. This button redirects the user to a component containing a form where they can upload themselves as a teacher by submitting a `Post` request to the API. 

The form itself was built in another `TeacherForm` component and then imported into the `AddTeacher` page to streamline the process. Another `ImageUpload` component was then made with a `Post` request to `Cloudinary` which was then imported into the `TeacherForm`. 

This three stage process when combined togther allowed users to upload images of themselves when creating a teacher, which can then be acessed from the get requests in the other pages. 

* AddTeacher

![Screen Shot 2022-03-29 at 22 21 57](https://user-images.githubusercontent.com/91087641/160709653-eb71cec3-e217-42d5-9ea0-4df6c8d97b06.png)

* TeacherForm

![Screen Shot 2022-03-29 at 22 20 50](https://user-images.githubusercontent.com/91087641/160709601-5af84f2d-1ba1-441a-81a7-8173be1166ce.png)

* ImageUpload

![Screen Shot 2022-03-29 at 22 20 31](https://user-images.githubusercontent.com/91087641/160709572-cbb7a10e-1adb-4794-a31f-075f75938073.png)

#### Styling

This was the first project in which I worked with the `Boosttrap`. `Bootstrap` made styling the CSS and positioning HTML elements much considerably easier and smoother across the site and achieve the "clean" look we wished for the site.

Another aspect in which Bootstrap proved very effective was in helping make the platform fully responsive to different screen sizes, especially mobile. While we all still had to spend a certain amount of time using `SCSS` and setting `media queries` to adjust the project to different sizes. 

We were also very happy with how smooth we made the `UX` for the interface overall, keeping this heavily in mind when styling each page.

#### Project Walkthrough

<img width="1416" alt="Screen Shot 2022-03-29 at 22 36 42" src="https://user-images.githubusercontent.com/91087641/160711678-73f15166-79ce-4b70-a396-7fbff3d240cf.png">

<img width="709" alt="Screen Shot 2022-03-29 at 22 36 54" src="https://user-images.githubusercontent.com/91087641/160711706-0b89ca80-95ec-49b5-9b25-df4a5fc3726f.png">

<img width="1438" alt="Screen Shot 2022-03-29 at 22 37 01" src="https://user-images.githubusercontent.com/91087641/160711735-d3db4d06-ad77-49b8-8bf6-2e06342b2861.png">

<img width="1440" alt="Screen Shot 2022-03-29 at 22 37 12" src="https://user-images.githubusercontent.com/91087641/160711760-4049eb2e-280a-4c7e-a450-4dc7eaf2fcea.png">

<img width="1418" alt="Screen Shot 2022-03-29 at 22 37 34" src="https://user-images.githubusercontent.com/91087641/160711791-249cf4ed-cca8-4bc6-9e93-239e9fd14cb1.png">

<img width="1437" alt="Screen Shot 2022-03-29 at 22 37 52" src="https://user-images.githubusercontent.com/91087641/160711821-4c95d615-af68-42d6-b419-83d0172dd900.png">

<img width="722" alt="Screen Shot 2022-03-29 at 22 38 01" src="https://user-images.githubusercontent.com/91087641/160711853-40fe4908-5402-4cc4-bb3e-78b9e58db087.png">

## Challenges and Wins

#### Challenges

This was my first time working with Git as a member of a team so it took some time getting used to checking out and merging feature branches, with four of us working on different parts of the frontend. Good communication and planning was key to avoid major merge conflicts and from around halfway through the project we were merging with little to no issues at all.

As this was our first time building a back end database, there was a learning curve for us to get all the aspects of each model, route and controller working effectively. However, doing this together as a team not only helped us solve problems we encountered quickly but also really helped us to cement the fundamentals and also understand how express and MongoDB works.

#### Wins

Fool proof planning as part of a team. We did a great job at planning out the project and spending a significant amount of time in wireframing as well planning what models we would use and where. Working as part of a four person team could have been more challenging, but we were well organised with daily standups in which we would discuss what features we are building on the day and how we will be working during the day.

Going further with React and building more complex components. The scope of this project was much larger than anything we encountered before, such as having multiple filters and requests in a single component, or a triple import of components to get the cloudinary images to work smoothly. This was our first Full Stack project and I feel like we all really rose to the occasion.

Styling an app that was fully responsive to different screen sizes and mobiles. Learning how to use Bootstrap helped with this considerably but we all put a lot of thought and effort into the UX and learning how to use media queries to make everything responsive. Being able to use a Full Stack Application we've built on a mobile is very satisfying.

## Future Improvements

Include and Edit review button.

Have a seperate form for booking a lesson for a teacher with a checkout page for payment as opposed to sending an email to the teacher. 

## Key Learnings

This project continued to strongly cement my knowledge of React, pushing myself to seek out documentation and become more confident in trying things I hadn't considered before. During this project React became one of my favourite systems to work with.

MongoDB and working with NoSQL databases for the first time. It was great to get to work building a first database and adapt the knowledge learned by building a MongoDB database.

Planning effectively and working as a team. It has been a great experience working on a first team project. Learning how to organise the workflow and different tasks between group members really helped us out in this project.

Bootstrap Framework. I really enjoyed working with Bootstrap which I learnt from scratch during this project. It was a great starting point in this project to get more comfortable with another framework and looking forward to using it in future projects.

Overall I was able to apply what I had learnt previously and also push myself to look up documentation and learn much more doing this project.

I'm proud of the work I have achieved and the end result we all got together. Even though there is always more we could do, we worked very well as a team and achieved what we set out to do, creating a fully functional and mobile responsive language platform.

## Contact

Social - www.linkedin.com/in/peter-bid

Email - peterbid21@gmail.com
