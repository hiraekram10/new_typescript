
const body = document.querySelector('body')!;

//><><><><>><><<<<< creating table
const table = document.createElement('table');

//><><><><>><><<<<< table styling
table.style.border = "1px solid black";
table.style.backgroundColor = "rgb(242, 246, 255)";
table.style.width = "96vw";
table.style.textAlign = "center";
const thead = document.createElement('thead');
table.appendChild(thead);
const tableRows = document.createElement('tr');
tableRows.style.backgroundColor = "blue"
tableRows.style.color = "white"
tableRows.style.height = "10vh";


//<><><><>><<<<<<<<<<<<><>> Cells 
const cellOne = document.createElement('th');
cellOne.innerText = 'Id';
tableRows.appendChild(cellOne);
const cellTwo = document.createElement('th');
cellTwo.innerText = 'Name';
tableRows.appendChild(cellTwo);
const cellThree = document.createElement('th');
tableRows.appendChild(cellThree);
cellThree.innerText = 'Email';
const cellFour = document.createElement('th');
cellFour.innerText = 'Phone';
tableRows.appendChild(cellFour);
thead.appendChild(tableRows);
const tbody = document.createElement('tbody');
table.appendChild(tbody);
body.appendChild(table);

// Fetch API
async function getUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) {
            throw new Error('Response error');
        }
        const users = await res.json();

        const tableBody = document.querySelector('tbody')!;
        users.map((item: { id: number; username: string; email: string; phone: string; }) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${item.id}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
		   <td>${item.phone}</td>`;
            tableBody.appendChild(row);
            tableBody.style.backgroundColor = "#c4d4e3"
        });

    } catch (error) {
        console.error('Error', error);
    }
}

getUsers();