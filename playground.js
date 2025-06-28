const tasks = [
  {
    id: 1,
    title: 'NestJS',
    description: 'Gemini challenge',
  },
  {
    id: 2,
    title: 'React',
    description: 'Still reviewing',
  },
];

const task = tasks.find((task) => task.id === 1);


Object.assign(task, { description: 'Gemini challenge is under progress' });
console.log(tasks);
