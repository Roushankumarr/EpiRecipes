
# Project Title

EpiRecipes Search Platform

[![Watch the video]](https://www.youtube.com/watch?v=HoMMwCS1G3A))



## Objectives
Develop a full-stack web application that indexes the "EpiRecipes" dataset into OpenSearch, provides a user-friendly interface for searching and filtering recipes, and demonstrates proficiency in React for frontend development and Node.js for backend development, along with version control using GitHub.

## Project Overview
You are tasked with creating a comprehensive recipe search platform that allows users to efficiently search and filter through a vast collection of recipes. The application should mimic the user experience of leading e-commerce platforms like Flipkart or Amazon, ensuring intuitive navigation and responsive design.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Technical Requirements
1. Data Indexing with OpenSearch

- **Dataset:** Utilize the EpiRecipes dataset from Kaggle. [EpiRecipes Dataset](https://www.kaggle.com/datasets/hugodarwood/epirecipes)
- **OpenSearch Setup:**
  - Install OpenSearch locally.
  - Create an index tailored to the EpiRecipes dataset.
  - Ingest the dataset into OpenSearch, ensuring proper mapping of fields for optimized search performance.
- **Documentation:**
  - Provide scripts or instructions for setting up OpenSearch and indexing the data.

### 2. Backend Development

- **Framework:** Node.js
- **API Development:**
  - Develop RESTful APIs to handle search queries and filtering.
  - Implement endpoints for:
    - Retrieving recipes based on search keywords.
    - Filtering recipes by categories such as ingredients, cuisine, preparation time, etc.
    - Pagination of search results.
- **Integration with OpenSearch:**
  - Ensure seamless communication between the backend and OpenSearch for data retrieval.
- **Documentation:**
  - Include setup instructions, dependency installation, and API endpoint descriptions.

### 3. Frontend Development

- **Framework:** React.js
- **Design Specifications:**
  - Create a single-page application (SPA) with a responsive design.
  - Design a user interface inspired by e-commerce platforms like Flipkart or Amazon.
- **Features:**
  - **Search Functionality:** Allow users to search for recipes using keywords.
  - **Filters:** Implement dynamic filters (refer to the dataset for filter fields) that update search results in real-time.
  - **Recipe Display:** Show recipe details in an organized and visually appealing manner.
  - **Navigation:** Ensure smooth navigation between different sections of the application.
- **Integration with Backend:**
  - Connect the React frontend with the Node.js backend APIs for data retrieval and interaction.
- **Documentation:**
  - Provide instructions on setting up the React project, installing dependencies, and running the application locally.


## API Reference

#### Get all items

```http
  http://localhosts:9200/api/recipes
```



## API Endpoints

The following API endpoints are available for interacting with the EpiRecipes Search Platform:

### 1. Search Recipes

- **Endpoint**: `GET /api/recipes/search`
- **Description**: Retrieves recipes based on the search keyword.
- **Query Parameters**:
  - `query` (string, required): The keyword to search for in recipes.
- **Response**:
  - **Success (200)**: Returns a list of recipes matching the search criteria.
  - **Example**:
    ```json
    {
      "results": [
        {
          "id": "1",
          "title": "Spaghetti Carbonara",
          "ingredients": ["spaghetti", "eggs", "cheese", "bacon"],
          "cuisine": "Italian"
        },
        {
          "id": "2",
          "title": "Chicken Tikka Masala",
          "ingredients": ["chicken", "spices", "tomatoes", "cream"],
          "cuisine": "Indian"
        }
      ],
      "totalResults": 2
    }
    ```

### 2. Filter Recipes

- **Endpoint**: `GET /api/recipes/filter`
- **Description**: Retrieves recipes based on specific filters.
- **Query Parameters**:
  - `cuisine` (string, optional): Filter by cuisine type (e.g., Italian, Indian).
  - `ingredient` (string, optional): Filter by a specific ingredient.
  - `prepTime` (number, optional): Filter by preparation time in minutes.
- **Response**:
  - **Success (200)**: Returns a list of filtered recipes.
  - **Example**:
    ```json
    {
      "results": [
        {
          "id": "3",
          "title": "Vegetable Stir Fry",
          "ingredients": ["broccoli", "carrots", "bell peppers"],
          "cuisine": "Chinese"
        }
      ],
      "totalResults": 1
    }
    ```


### 3. Pagination

- **Endpoint**: `GET /api/recipes`
- **Description**: Retrieves a paginated list of recipes.
- **Query Parameters**:
  - `page` (number, optional): The page number to retrieve (default: 1).
  - `limit` (number, optional): The number of recipes per page (default: 10).
- **Response**:
  - **Success (200)**: Returns a paginated list of recipes.
  - **Example**:
    ```json
    {
      "results": [...],
      "currentPage": 1,
      "totalPages": 5,
      "totalResults": 50
    }
    ```

### Notes

- Ensure that your backend is running before testing these endpoints.
- For any authentication or specific headers required, please refer to the backend documentation or code comments.
## Project Setup

### Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **OpenSearch**: Install OpenSearch following the instructions from the [OpenSearch documentation](https://opensearch.org/docs/latest/install-and-configure/install-opensearch/).
- **Git**: Ensure Git is installed on your machine. You can download it from [git-scm.com](https://git-scm.com/).

### Cloning the Repository
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Roushankumarr/Erecipe.git
   cd Erecipe


2. Setting Up the Backend:
  ```bash
  1.Navigate to the backend folder:
  
  cd Server

  2.Install the necessary dependencies:
  
   npm install

  3. Set up the environment variables: Create a .env file in the Server directory and add your environment variables. An example is provided below:

  PORT=5000

   OPENSEARCH_HOST=http://localhost:9200

3. Setting Up the Frontend:
   ```bash
    
   1.Navigate to the Frontend Folder:



     cd Frontend
   2.Install Dependencies: Install the required packages using npm:

      npm install
  3. Start the Development Server: Launch the frontend application:

      npm start
   4. This will start the application on http://localhost:3000.


      
   



   
 


        
