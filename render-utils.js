export function renderTodo(todo, handleComplete) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');

    div.classList.add('todo');

    p.textContent = todo.todo;
    // add the 'todo' css class no matter what
    div.append(p);
    // put the todo's text into the p tag

    // append stuff

    // add event listener for click and call handleComplete function

    // return the div
    return div;
}
