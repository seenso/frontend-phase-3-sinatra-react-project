# Whose Turn Is It?
This "Whose Turn Is It?" project is a communication tool to help household members coordinate the care of their pets. Care taking tasks can be assigned to household members and can be regularly scheduled for recurring tasks like feeding, walking, litter box scooping. One off tasks can also be created for tasks like vet appointments or to indicate that a pet is out somewhere with a household member (i.e. dog park).

It has a Sinatra API backend that uses Active Record to access and persist data in a database, which will be used by a separate React frontend that interacts with the database via the API.
- This current repo is the React frontend
- The Sinatra backend can be found [here](https://github.com/seenso/phase-3-sinatra-react-project).

# Project Requirements
For this project, you must:
- Use Active Record to interact with a database.
- Have a minimum of two models with a one-to-many relationship.
- Create API routes in Sinatra that handles at least three different CRUD actions for at least one of your Active Record models.
- Build a separate React frontend application that interacts with the API to perform CRUD actions.
- Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary.

# User Stories
- create a household with people and pets
- add regularly scheduled tasks (i.e. litter box, feed dog x times, in daily/weekly/etc. increments) with end dates
- create vet appts (vaccines, checkups, etc) with time, date, location

# Color Palette
- Pink #C71C81
- Blue/Purple #3F559E

# Wire Frame
<img width="1433" alt="WhoseTurnIsIt? Wireframe" src="https://user-images.githubusercontent.com/46327683/147964785-d1222fe3-f63d-4bef-ac7b-22dd135984e4.png">

# Entity Relationship Diagram
![image](https://user-images.githubusercontent.com/46327683/148500450-aad4f48b-1a96-4b27-b11a-590a273d5486.png)
