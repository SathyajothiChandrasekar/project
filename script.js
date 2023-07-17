let lists = document.getElementsByClassName('list');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let search = document.getElementById('search');
let searchbtn = document.getElementById('searchbtn');
let notFoundMessage = document.getElementById('not-found');
let body = document.getElementById("itemBody");

// Function to filter the lists based on search input
function filterLists() {
    let searchTerm = search.value.toLowerCase();
    let found = false; // Flag to track if the searched item is found

    for (let list of lists) {
        let item = list.textContent.toLowerCase();
        if (item.includes(searchTerm)) {
            list.style.display = "flex";
            found = true;
        } else {
            list.style.display = "none";
        }
    }

    if (!found) {
        notFoundMessage.style.display = "block";
    } else {
        notFoundMessage.style.display = "none";
    }
}

// Event listener for search button click
searchbtn.addEventListener('click', filterLists);

// Event listener for search input change
search.addEventListener('input', filterLists);

for (let list of lists) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        c2.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        c2.addEventListener('drop', function (e) {
            c2.appendChild(selected);
            selected = null;
        });

        c1.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        c1.addEventListener('drop', function (e) {
            c1.appendChild(selected);
            selected = null;
        });

        c3.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        c3.addEventListener('drop', function (e) {
            c3.appendChild(selected);
            selected = null;
        })

        c4.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        c4.addEventListener('drop', function (e) {
            c4.appendChild(selected);
            selected = null;
        })
    })
}
console.log("Lists:", lists);
