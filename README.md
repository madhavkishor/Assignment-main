# 🚀 React App

A simple and responsive **Login & Register** authentication system built
with **React.js + TailwindCSS**.\
This project uses **localStorage** to store user credentials (for demo
purposes, no backend is required).

------------------------------------------------------------------------

## ✨ Features

-   User Registration with email & password
-   Login authentication with saved credentials
-   Redirects user to **Account** page after login
-   **Welcome Page** after successful registration
-   Responsive UI for Mobile & Laptop
-   Data persistence using **localStorage**

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **React.js (Vite)** -- Frontend framework
-   **React Router DOM** -- Navigation & Routing
-   **TailwindCSS** -- Styling
-   **LocalStorage** -- Data storage (demo only)

------------------------------------------------------------------------

## 📂 Folder Structure

    ASSIGNMENT/
    │── node_modules/
    │── public/
    │── src/
    │   ├── assets/           # static assets (images, icons, etc.)
    │   ├── pages/            # application pages
    │   │   ├── Account.jsx   # Account page after login
    │   │   ├── Login.jsx     # Login page
    │   │   ├── Register.jsx  # Register page
    │   │   └── Welcome.jsx   # Welcome page after signup
    │   ├── App.css           # global styles
    │   ├── App.jsx           # main app component with routes
    │   ├── index.css         # TailwindCSS styles
    │   ├── main.jsx          # entry point
    │── .gitignore
    │── eslint.config.js
    │── index.html
    │── package.json
    │── package-lock.json
    │── vite.config.js
    │── README.md

------------------------------------------------------------------------

## ⚡ Installation & Setup

1.  Clone the repository:

    ``` bash
    git clone https://github.com/your-username/react-auth-app.git
    cd react-auth-app
    ```

2.  Install dependencies:

    ``` bash
    npm install
    ```

3.  Start development server:

    ``` bash
    npm run dev
    ```

4.  Open the app in browser:

        http://localhost:5173

------------------------------------------------------------------------

## 🔑 Usage

1.  Go to **Register Page** and create an account with email &
    password.\
2.  Login with the same credentials.\
3.  After successful login → Redirects to **Account Page**.\
4.  Logout by clearing localStorage (or implement a Logout button).

----------------------------------------------------------------------

## 📌 Note

⚠️ This project is for **demo purposes only**.\
Authentication is stored in **localStorage** → not secure for
production.\
For real apps, integrate with a backend + database + JWT.

------------------------------------------------------------------------

## 👨‍💻 Author

-   Developed by **[Sahil kumar]**
