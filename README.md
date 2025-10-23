# Learn React Tasks

A simple React app to track your progress while learning React fundamentals.  
You can add, edit, mark as done, and delete tasks.  
The app is built using React hooks such as useReducer and useState.

---

## Features

- Manage a list of learning tasks (add, edit, delete, toggle done)
- Uses React’s useReducer hook for organized state management
- Controlled components for form inputs
- Live UI updates on every action (no page refresh)
- Lightweight setup with Vite and React

---

## Tech Stack

- React 18+
- Vite
- JavaScript (ES6+)
- CSS (basic styling, no frameworks)

---

## Installation

1. Create a new Vite React project:
   ```bash
   npm create vite@latest learn-react-tasks -- --template react
   ```

2. Move into the project folder:
   ```bash
   cd learn-react-tasks
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   npm run dev
   ```

---


## How It Works

- `App.jsx` handles global task state using useReducer.
- `AddTask.jsx` manages the input field for adding new tasks.
- `TaskList.jsx` displays tasks and allows editing, marking done, or deleting.
- `useReducer` listens for three action types:
  - `added` adds a new task.
  - `changed` updates an existing task.
  - `deleted` removes a task.
- The UI updates automatically whenever state changes.

---

## Example Initial Tasks

The app starts with a simple roadmap for learning React:

1. Set up your React project with Vite or CRA  
2. Learn JSX syntax and expressions  
3. Understand components and props  
4. Learn about state with useState()  
5. Handle events like onClick and onChange  
6. Render lists using map()  
7. Use keys when rendering dynamic lists  
8. Learn conditional rendering with && and ?:  
9. Understand useEffect and side effects  
10. Learn useReducer for complex state logic  
11. Understand lifting state up and data flow  
12. Practice building small React projects  
13. Learn about React Router and navigation
