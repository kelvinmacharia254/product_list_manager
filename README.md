# React + Django Application
This is a simple ```CRUD```((Create, Read, Update, Delete)) application that uses React for the frontend and Django for the backend. 
The application is a stock manager that allows users to add, update, and delete list of products.
Each product has the following attributes:  
    - Name
    - Description
    - Price

## Major Technologies
- React(Frontend)
- Django(Backend)

## Major Concepts Learnt
1. Django and React integration
   - This project was a great way to learn how to integrate Django and React.
   - I configured CORS (Cross-Origin Resource Sharing) headers in Django's settings to allow API calls from the frontend.
   - I used the Fetch API to send and receive data between the React frontend and Django backend.
   - Configured Django to serve as an API provider, using Django REST Framework (DRF) to handle the backend's API endpoints.
   
2. React Router and Form Handling
   - I learned to use React Router (react-router-dom) for dynamic routing in the application.
   - Implemented loaders to fetch data from the backend and actions to send data to the backend, such as when updating or deleting a product.
   - Utilized react-router-dom's Form component for handling form submissions, which includes adding and updating products.
   - Hooks utilized in the project include:
        - useLoaderData: Retrieves data loaded from the backend using the loader function.
        - useLocation: Accesses the current URL location within components that don't have direct access to request data, like in loaders or actions.
   - Objects used in the project include:
        - requests: Used within loaders and actions to handle requests for data retrieval or form submissions.
        - params: Allows access to dynamic URL parameters (such as product IDs) used in routes to update specific products. It's available in loaders and actions.
        - URLSearchParams: Utilized to extract query parameters from the URL, especially when using useLocation for accessing the current location state.
3. Backend API Design with Django
   - Implemented RESTful API endpoints for products using DRF generic API views. 
   

## Installation
1. Clone the repository
    - ```git clone https://github.com/kelvinmacharia254/product_list_manager.git```
2. Install the required dependencies
      Backend
    - `poetry install`
      Frontend
    - `npm install`
3. Run the application
      Backend
    - `poetry shell`
    - `python manage.py migrate`
    - `python manage.py runserver`
      Frontend
    - `npm run dev`
   
4. Open your browser and navigate to `http://localhost:3000/` (or the assigned port for your React project)

5. You can now add, update and delete products and more.

6. Enjoy! and feel free to contribute to the project or share your feedback 

Author: Kelvin Macharia

contact: ```pilotkelvin0@gmail.com```