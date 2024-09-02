
# ReactJS ToDo Application

This is a simple and intuitive ToDo application built with ReactJS. The app allows users to manage their tasks efficiently with features like adding, editing, completing, and deleting tasks. Additionally, users can search through tasks using a search bar, and the app includes a visually appealing header with a custom icon.

## Application is hosted in `https://reactjs-todo-application123.netlify.app/`

## Features

- **Add Tasks**: Quickly add new tasks to your ToDo list.
- **Edit Tasks**: Edit existing tasks by clicking on the Edit button.
- **Complete Tasks**: Mark tasks as complete, which changes their appearance and disables further editing.
- **Delete Tasks**: Remove tasks from your ToDo list when they are no longer needed.
- **Search Functionality**: Easily search through tasks to find specific ones.
- **Local Storage**: Tasks are saved in the browser's local storage, ensuring they persist across sessions.
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.

## Screenshots

![Screenshot of the ToDo Application](./screenshots/todo-app-screenshot.png)

## Installation

To get started with the ToDo application, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/react-todo-app.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd react-todo-app
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm start
   ```

   The application will be available at `https://reactjs-todo-application123.netlify.app/` in your browser.

## Usage

- **Add a Task**: Type your task into the input field and press Enter or click the Add button.
- **Search Tasks**: Use the search bar at the top to filter tasks based on your search query.
- **Mark as Complete**: Click the Complete button next to a task to mark it as done, which will move it to the "Completed" section and trigger a completion alert.
- **Edit a Task**: Click the Edit button to modify an existing task. The task will move back to the input field for editing.
- **Delete a Task**: Click the Delete button to remove a task from the list.
- **Local Storage**: Your tasks are automatically saved in local storage, so they persist even after you close the browser.

## Customization

- The project includes a `src/assets/icon.png` file for the ToDo app icon.
- You can customize the look and feel of the application by modifying the `src/App.css` file.
- The application is designed to be responsive, ensuring a good user experience on both desktop and mobile devices.

## Project Structure

- `src/components/`: Contains reusable components like `TodoInput` and `TodoList`.
- `src/assets/`: Contains static assets like the ToDo icon.
- `src/App.js`: The main application file where state management and functionality are handled.
- `src/App.css`: The stylesheet for customizing the appearance of the app.


