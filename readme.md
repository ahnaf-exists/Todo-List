# Todo List App

A minimalist Todo List web application built with HTML, CSS, and JavaScript. This app allows users to easily manage their tasks, set deadlines, and track completed items.

## Features

-   ✅ Add new tasks with titles and descriptions
-   🗓️ Set deadlines for tasks
-   🔘 Mark tasks as complete or incomplete
-   🔍 Show/hide task descriptions
-   🗑️ Delete individual tasks
-   💾 Persist task data in the browser's local storage
-   🔄 Reset the entire todo list

## Tech Stack

-   HTML
-   CSS (Vanilla)
-   JavaScript (Vanilla)

## Implementation Details

### User Interface

The app features a clean, minimalist design with two main sections:

1. **Main Todo List**: Displays all the added tasks, including their title, deadline, and description. Each task has options to mark as complete/incomplete, show/hide description, and delete.
2. **Sidebar**: Provides an input field to add a new task, a deadline selector, and buttons to add the task or reset the entire list.

### Data Management

The app uses the browser's local storage to persist the todo list data. When the page is loaded, the existing tasks are retrieved from local storage and rendered on the screen. Any changes made to the list, such as adding, completing, or deleting tasks, are automatically saved to local storage.

### Task Handling

The main functionality of the app is handled by the `script.js` file:

1. **Adding Tasks**: Users can add a new task by filling out the title and description fields in the sidebar, and optionally setting a deadline. When the "Add work" button is clicked or the "Enter" key is pressed, a new task is created and added to the list.
2. **Marking Tasks**: Each task has a "Mark as completed/incomplete" button that toggles the task's completion status. The task title is styled accordingly to indicate its state.
3. **Showing/Hiding Descriptions**: The "Show/Hide Description" button allows users to toggle the visibility of the task's description.
4. **Deleting Tasks**: The "Delete" button removes the corresponding task from the list and updates the local storage.
5. **Resetting the List**: The "Reset Todo List" button clears all the tasks from the list and removes the data from local storage.

### Styling

The app's styling is done using plain CSS, without any CSS frameworks or libraries. It features a dark color scheme with contrasting elements to provide a clean and modern look.

## Usage

1. **Adding a Task**:

    - Enter a title and description for the task
    - (Optional) Set a deadline for the task
    - Click the "Add work" button or press Enter to add the task to the list

2. **Managing Tasks**:

    - Click the "Mark as completed/incomplete" button to toggle the task's status
    - Click the "Show/Hide Description" button to display or hide the task's description
    - Click the "Delete" button to remove the task from the list

3. **Resetting the List**:
    - Click the "Reset Todo List" button to clear all tasks from the list

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open a new issue or submit a pull request.
