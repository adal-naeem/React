let todoList = [];

// 1. Database se tasks load karna
async function loadTodos() {
    try {
        const response = await fetch('http://localhost:3000/tasks');
        todoList = await response.json();
        displayItems();
    } catch (err) {
        console.error("Data load nahi ho saka:", err);
    }
}

// 2. Naya task add karna
async function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;

    if (todoItem === '' || todoDate === '') {
        alert("Please enter a task and select a date!");
        return;
    }

    // Server ko data bhejna
    try {
        const response = await fetch('http://localhost:3000/add-task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item: todoItem, dueDate: todoDate })
        });

        if (response.ok) {
            inputElement.value = '';
            dateElement.value = '';
            loadTodos(); // Database se fresh list mangwao
        }
    } catch (err) {
        console.error("Task add nahi ho saka:", err);
    }
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        
        // Date ko sahi format mein dikhane ke liye
        let formattedDate = new Date(dueDate).toLocaleDateString();

        newHtml += `
            <span>${item}</span>
            <span>${formattedDate}</span>
            <button class="btn-delete" onclick="deleteTodo(${todoList[i].id})">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}

// Page load hote hi data fetch karein
loadTodos();



async function deleteTodo(id) {
    if (!confirm("Click OK if you are sure.")) return;

    try {
        const response = await fetch(`http://localhost:3000/delete-task/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log("Task delete ho gaya");
            loadTodos(); // List ko refresh karein
        }
    } catch (err) {
        console.error("Delete karne mein masla aaya:", err);
    }
}