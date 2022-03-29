# Esperanto

### General Assembly Project 3

<img width="1429" alt="Screen Shot 2022-03-29 at 15 38 55" src="https://user-images.githubusercontent.com/91087641/160637409-f62026c7-5ec4-4fe3-bfe0-f2f056ec430e.png">

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

As a team of developers ranging from diverse international backgrounds interested in langauges, we wished to create a langauge education platofor. We used an existing language site Italki as a template for which to form our ideas, however we wished to make an even "cleaner" version of this site visually.

Even the name of our app, the Esperanto, was inspired by the wish for international communication. We though this was a consistant and clear way to brand the purpose of our platform.

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

We have spent the first day deciding on an idea as well as planning our project thouroughly with building wireframes, alongside the models, schemas and axious requests required the project. 

We then also made an Asana Board to track, short term and strech goals we should be working on each day for the project. Using Asana also helped us to designate who would be working on certain aspects of the project. 

It considerably helped us to be organised, knowing exactly what features we were building and when helped make the overall process smoother.

#### Wire Frame

![project-3-plan (1)](https://user-images.githubusercontent.com/91087641/160674911-e407fea4-db47-4b72-aacf-6ea4d944604a.png)

![Screen Shot 2022-03-29 at 18 57 58](https://user-images.githubusercontent.com/91087641/160675555-f8f86ecb-cab5-4efd-a221-c8f1b7247206.png)

![Screen Shot 2022-03-29 at 18 58 14](https://user-images.githubusercontent.com/91087641/160675576-9672f727-0ece-42f7-b65f-ebb3c82f1a4d.png)

![Screen Shot 2022-03-29 at 18 57 20](https://user-images.githubusercontent.com/91087641/160675612-14e74d04-2521-433d-9b7a-387c0c4cf79e.png)


### Creating the Backend with Express and MongoDB

We created our backend together so that there was no confusion about any models and databases, but also to reinforce our knowledge of concepts. This process went ver smoothly. After installing the necessary dependencies and setting up the basic middleware necessary to have a server running. We then began to build the different schemas for users, teachers and reviews.

#### Models

The Teacher Schema as well as containing a large range of fields, also contained an attached many to one Review model to implement the use of multiple reviews for each individual teacher. 

We ensured to the display picture would be a string in order for us to convert the image url of uploaded images with `Cloudinary`.

![Screen Shot 2022-03-29 at 19 14 09](https://user-images.githubusercontent.com/91087641/160678792-2df70332-0a8a-4233-abd3-17fdb9d1763b.png)

The User `Schema` comprised of basic login details, username, email, password and confirmation. 

We also have a `virtual field` of owned "teachers" that the user creates on the site, this would allow for permissions checks for editing and deleting the page they have made for themselves when they have added themselves as a teacher. 

We also used `bcrypt` to hash passwords that a user has made to login.

![Screen Shot 2022-03-29 at 19 47 42](https://user-images.githubusercontent.com/91087641/160683982-a33ee6b9-71f2-4e56-8718-62e639963a82.png)

![Screen Shot 2022-03-29 at 19 47 54](https://user-images.githubusercontent.com/91087641/160684011-94c7f06c-ebe4-4a27-aaf8-8a23dab148e9.png)

#### Authentication

We used `JsonWebToken` to create a controller which would check if the user was valid. This was then used alongside a secure route which verified users using the token.

![Screen Shot 2022-03-29 at 19 54 25](https://user-images.githubusercontent.com/91087641/160684513-aa9e9f6b-901f-4af6-8a55-0f7136e2ab29.png)

![Screen Shot 2022-03-29 at 19 54 33](https://user-images.githubusercontent.com/91087641/160684546-1c2e2684-eb51-4615-b35a-d2940991b25c.png)

#### Controllers and Routes

We created each api request and the endpoints needed for the project and which controller request types `GET`, `PUT`, `POST`, `DELETE` should be assigned to each of them.

The last thing we had to do was to add middleware and decide which routes didn't require authentication and which routes required a `secureRoute` to gives permission to certain endpoints so that users can only edit/delete reviews or change the teacher they have created themselves.

![Screen Shot 2022-03-29 at 20 08 23](https://user-images.githubusercontent.com/91087641/160688371-1e184f86-8109-469a-a542-1e74cca62a28.png)

![Screen Shot 2022-03-29 at 20 09 09](https://user-images.githubusercontent.com/91087641/160688597-71cbef86-e928-4d73-894f-f63ff7401cfd.png)

We double-checked all our routes while creating them using `Insomnia`, ensuring that we could log in, register, and check the authentication permissions using token authorization.

<img width="958" alt="Screen Shot 2022-03-29 at 19 53 03" src="https://user-images.githubusercontent.com/91087641/160689111-5233e873-85fa-4750-b152-45526acbbc53.png">


### Creating the Frontend with React

#### Creating Components

We created a React app and connected to the database. We then created all the components that we were planning to use and connected them using the React Router DOM together. 

After this point we then indiviually focused on specific compnents individually to create the elements that would make up each individual component. 

However everyone contributed to parts of each component still, helping each other out with aspects they had greater expertise in.

#### Home

Alongiside displaying information about the website, we created a 'state' of langauges in conjucntion with a `Get` request to create a `useEffect` for a `countLangauges` function. 

This meant that the number of langauges displayed on the home page would dynamically update with each brand new langauge taught by a teacher would added to the database. 

![Screen Shot 2022-03-29 at 20 22 24](https://user-images.githubusercontent.com/91087641/160691504-ba939765-1362-435f-87f2-7bd569b63394.png)

<img width="834" alt="Screen Shot 2022-03-29 at 20 26 00" src="https://user-images.githubusercontent.com/91087641/160691732-f9a7a6e3-1f06-4f35-936b-365579d82be7.png">

#### TeachersList

For displaying the teachers, after using a `get` axios request to receive the data we used the `map` method alongside `bootstrap` `rows` and `cols` to display the data from each teacher in cards. 

Calling the `length` of the teachers array allows the numbers of teachers available on the site to dynamically update.

* Filtering

A `useState` of `searchTerm` alongside a text form targeting what users typed as a search term for langauge taught was used to create a function to filter out results for the map.

This was used alongside another filter a `select` form attached to an `handleChange` event listener which updated the teaches filtered from the array in accordance to the `pricePerHour` value.

Placing both of these filters before the `map` allowed both filters to be applied to the teachers the mapped in the return.

![Screen Shot 2022-03-29 at 20 45 15](https://user-images.githubusercontent.com/91087641/160694905-fbdff330-aa2f-4f20-ab4d-2b15805c3152.png)

![Screen Shot 2022-03-29 at 20 44 59](https://user-images.githubusercontent.com/91087641/160694956-35ff793d-6951-47aa-b18a-f129a4bf73af.png)

![Screen Shot 2022-03-29 at 20 45 35](https://user-images.githubusercontent.com/91087641/160695037-5f4495b1-3cf4-45e5-a4c1-f134f8fb474c.png)

<img width="1153" alt="Screen Shot 2022-03-29 at 20 48 43" src="https://user-images.githubusercontent.com/91087641/160695248-08f5b08a-4858-4980-b72e-d74ed6e95be6.png">

#### TeachersProfile

We used the `id` of each teacher on the teacher list page , to create a `teacherID` which then used with `useParams` created links to the `TeachersProfile` component. If a user clicks to view the profile of an individual teacher, they are redirected to a page with detailed information about that teacher. This is then used to return specific information related to each teacher.




#### Styling

#### Project Walkthrough

## Challenges and Wins

#### Challenges

#### Wins

## Future Improvements

## Key Learnings

## Contact

Social - www.linkedin.com/in/peter-bid

Email - peterbid21@gmail.com
