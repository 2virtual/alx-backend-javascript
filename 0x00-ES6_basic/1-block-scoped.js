export default function taskBlock(trueOrFalse) {
  // Define initial values for task and task2
  const task = false;
  const task2 = true;

  // Check the value of trueOrFalse
  if (trueOrFalse) {
    // If trueOrFalse is true, create new local variables with different values
    const task = true; // eslint-disable-line no-unused-vars (disable "unused variable" warning for this line)
    const task2 = false; // eslint-disable-line no-unused-vars (disable "unused variable" warning for this line)
  }

  // Return the values of task and task2 as an array
  return [task, task2];
}
