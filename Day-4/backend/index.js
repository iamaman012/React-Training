const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// let todos = [{task:"React Query Task",id:1,done:false}];
let todos=[];

app.get('/', (_, res) => {
  return res.status(200).send(todos);
  // return res.status(500).send('Server error');
});

app.post('/', (req, res) => {
  const todo = req.body?.todo;

  todos.push(todo);
  return res.status(200).send(todos);
});

app.delete('/:todoId', (req, res) => {
  const todoId = req.params?.todoId;
  console.log({ todoId });

  todos = todos.filter((todo) => todo.id !== todoId);

  return res.status(200).send(todos);
});

app.put('/', (req, res) => {
  console.log("Request received to update todo");
  const todo = req.body?.todo;
  const todoId = todo?.id;

  // Find the index of the todo
  const index = todos.findIndex((t) => t.id === todoId);
  
  // Check if the todo exists
  if (index === -1) {
    return res.status(404).send({ message: 'Todo not found' });
  }

  // Update the todo in the array
  todos[index] = { ...todos[index], ...todo }; // Merge existing todo with updated data

  return res.status(200).send(todos); // Optionally return the updated list or the updated todo
});


app.listen(PORT, () => console.log('Server running'));
