"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const body = document.querySelector('body');
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
tableRows.style.backgroundColor = "blue";
tableRows.style.color = "white";
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
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch('https://jsonplaceholder.typicode.com/users');
            if (!res.ok) {
                throw new Error('Response error');
            }
            const users = yield res.json();
            const tableBody = document.querySelector('tbody');
            users.map((item) => {
                const row = document.createElement('tr');
                row.innerHTML = `
            <td>${item.id}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
		   <td>${item.phone}</td>`;
                tableBody.appendChild(row);
                tableBody.style.backgroundColor = "#c4d4e3";
            });
        }
        catch (error) {
            console.error('Error', error);
        }
    });
}
getUsers();
//# sourceMappingURL=app.js.map