# Taskflow

Taskflow is a simple task management API I made with Node.js and Express.js.

The project lets me add, view, update and delete tasks. Each task has a title, description, priority, assignee and status.

## Setup

Install the packages:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The server runs at:

```text
http://localhost:3000
```

## Routes

```text
GET    /tasks
GET    /tasks/:id
POST   /tasks
PUT    /tasks/:id
DELETE /tasks/:id
```

## Example task

```json
{
  "title": "Test 1",
  "description": "Test 1 description",
  "priority": "low",
  "assignee": "Elif",
  "status": "pending"
}
```

## Testing

I tested the API with Postman. The test screenshots are in the `screenshots` folder.
