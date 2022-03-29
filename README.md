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

The Teacher Schema as well as containing a large range of fields, also contained an attached many to one Review model to implement the use of multiple reviews for each indiviual teacher. We ensured to the display picture would be a string in order for us to convert the image url of uploaded images with Cloudinary.

![Screen Shot 2022-03-29 at 19 14 09](https://user-images.githubusercontent.com/91087641/160678792-2df70332-0a8a-4233-abd3-17fdb9d1763b.png)


#### Authentication

### Creating the Frontend with React

#### Creating Components

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
