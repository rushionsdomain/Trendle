# Trendle


## Description

**Trendle** is a full-stack Instagram-like social media application that allows users to share photos, connect with friends, and interact through comments and likes. Built with modern web technologies, it offers a responsive design and a seamless user experience.

## Features

- User Authentication (Sign Up, Log In, Log Out)
- Create, Edit, and Delete Posts
- Like and Comment on Posts
- Real-time Chat Functionality
- User Profiles with Follow/Unfollow Options
- Responsive Design for Mobile and Desktop

## Technologies Used

- **Frontend:**
  - React
  - Axios
  - CSS (or styled-components)
  
- **Backend:**
  - Node.js
  - Express
  - MongoDB (with Mongoose)
  - Socket.IO for real-time communication

- **Other Libraries:**
  - dotenv
  - bcrypt
  - cors
  - helmet
  - morgan

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js
- MongoDB Atlas account (or local MongoDB)

### Clone the Repository

```bash
git clone https://github.com/rushionsdomain/trendle.git
cd trendle
````

### Backend Setup

1.  Navigate to the backend directory:
    
    ```bash
    cd backend
    ```
    
2.  Install dependencies:
    
    ```bash
    npm install
    ```
    
3.  Create a `.env` file in the `backend` directory and add your environment variables. Here’s an example structure:
    
    ```makefile
    MONGO_URI=your_mongodb_uri
    PORT=5000
    ```
    
4.  Start the backend server:
    
    ```bash
    npm run dev
    ```
    

### Frontend Setup

1.  Navigate to the frontend directory:
    
    ```bash
    cd frontend
    ```
    
2.  Install dependencies:
    
    ```bash
    npm install
    ```
    
3.  Start the frontend application:
    
    ```bash
    npm start
    ```
    

Usage
-----

*   Visit `http://localhost:5000` for the backend API.
*   Visit `http://localhost:3000` for the frontend application.

Contributing
------------

Contributions are welcome! If you’d like to contribute, please fork the repository and submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/MyFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/MyFeature`).
5.  Open a pull request.

License
-------

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


### Instructions:

1. **Logo**: Replace `path/to/logo.png` with the actual path to your logo image if you have one. If you don't have a logo, you can remove that line.
2. **Environment Variables**: Be sure to include the actual variables needed for your project in the `.env` setup section.
3. **LinkedIn Profile**: Update your LinkedIn link or add other relevant links.
4. **Additional Features**: You can add more features or sections as needed.
