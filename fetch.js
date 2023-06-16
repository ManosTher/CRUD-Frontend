const api_url = "https://fakestoreapi.com/products?limit=5";

// Getting data from Backend and show
async function getData(url) {
   
    // Storing response
    fetch(api_url)
    .then(response => {
        let data = response.json();
        return data;
    }).then( data => {
        console.log(data[1])
        let data1= "";
        let dt1 = data[1];
        data.map((values) => {
            data1 = `
            <ul class="list-group">
                <label for="name" class="form-label">Name</label>    
                <li class="list-group-item">${dt1.name}</li>
                <label for="lastname" class="form-label">Lastname</label>
                <li class="list-group-item">${dt1.lastname}</li>
                <label for="address" class="form-label">Street address</label>
                <li class="list-group-item">${dt1.adress}</li>
                <label for="city" class="form-label">City</label>
                <li class="list-group-item">${dt1.city}</li>
                <label for="state" class="form-label">State</label>
                <li class="list-group-item">${dt1.state}</li>
                <label for="zip" class="form-label">Zip code</label>
                <li class="list-group-item">${dt1.zip}</li>
                <label for="phone" class="form-label">Phone number</label>
                <li class="list-group-item">${dt1.phone}</li>
                <label for="email" class="form-label">Email address</label>
                <li class="list-group-item">${dt1.email}</li>
            </ul>
          </table>`
        });
        document.getElementById("show").innerHTML=data1;
    }).catch(error => console.log(error));
    


}

// Sending data to Backend Post Method
const form = document.getElementById('regForm');
const form1 = document.getElementById('form1');


// Handle form submission
form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        // Prevent the default form submission

        // Convert form data to JSON
        const formData = new FormData(form);
        const jsonData = {};

        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        console.log(jsonData);

        // Send the JSON data via POST request
        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jsonData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response:', data);
                // Handle the response as needed
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors
            });
    });
//
    
async function getData2(url) {

    fetch(api_url)
    .then(response => {
        let data = response.json();
        return data;
    }).then( data => {
        console.log(data)
        let data1= "";
        let dt1 = data[1];
        data.map((values) => {
            data1 = `
                <div class="mb-2 " style="margin-top: 5%;">
                    <label for="name" class="form-label"></label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="${dt1.title}" required>
                </div>

                <div class="mb-2 ">
                    <label for="lastname" class="form-label"></label>
                    <input type="text" class="form-control" id="lastname" name="lastname" placeholder="${dt1.lastname}" required>
                </div>

                <div class="mb-2 ">

                    <label for="address" class="form-label"></label>
                    <input type="text" class="form-control" id="address" name="adress"placeholder="${dt1.adress}" required>
                </div>          

                <div class="mb-2 ">

                    <label for="city" class="form-label"></label>
                    <input type="text" class="form-control" id="city"  name="city" placeholder="${dt1.city}" required>
                </div>
                
                <div class="mb-2 ">

                    <label for="state" class="form-label"></label>
                    <input type="text" class="form-control" id="state" name="state" placeholder="${dt1.state}" required>
                </div>

                <div class="mb-2 ">

                    <label for="zip" class="form-label"></label>
                    <input type="number" class="form-control" id="zip" name="zip" placeholder="${dt1.zip}" required>
                </div>

                <div class="mb-2 ">

                    <label for="phone" class="form-label"></label>
                    <input type="number" class="form-control" id="phone" name="phone" placeholder="${dt1.phone}" required>
                </div>

                <div class="mb-2 ">
                    
                    <label for="email" class="form-label"></label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="${dt1.email}" required>
                </div>

                <button id="regBtn" type="submit" class="btn btn-primary">Search</button>`
             });
        document.getElementById("show2").innerHTML=data1;
    }).catch(error => console.log(error)); 
}
    
// Show Hide fuction for Retrieve

const button2 = document.getElementById('retrieveBtn2');
const element3 = document.getElementById('retrieve');
const element4 = document.getElementById('form2');
element4.style.display = 'none';

button2.addEventListener('click', function() {
    // Hide element1 and show element2
    element3.style.display = 'none';
    element4.style.display = 'block';
  });

// Show Hide fuction for edit

const button = document.getElementById('retrieveBtnE');
const element1 = document.getElementById('edit2');
const element2 = document.getElementById('form1');
element2.style.display = 'none';

button.addEventListener('click', function() {
    // Hide element1 and show element2
    element1.style.display = 'none';
    element2.style.display = 'block';
  });


// Delete Section 

async function getData3(url) {
   
    // Storing response
    fetch(api_url)
    .then(response => {
        let data = response.json();
        return data;
    }).then( data => {
        console.log(data[1])
        let data1= "";
        let dt1 = data[1];
        data.map((values) => {
            data1 = `
            <ul class="list-group">
                <label for="name" class="form-label">Name</label>    
                <li class="list-group-item">${dt1.name}</li>
                <label for="lastname" class="form-label">Lastname</label>
                <li class="list-group-item">${dt1.lastname}</li>
                <label for="address" class="form-label">Street address</label>
                <li class="list-group-item">${dt1.adress}</li>
                <label for="city" class="form-label">City</label>
                <li class="list-group-item">${dt1.city}</li>
                <label for="state" class="form-label">State</label>
                <li class="list-group-item">${dt1.state}</li>
                <label for="zip" class="form-label">Zip code</label>
                <li class="list-group-item">${dt1.zip}</li>
                <label for="phone" class="form-label">Phone number</label>
                <li class="list-group-item">${dt1.phone}</li>
                <label for="email" class="form-label">Email address</label>
                <li class="list-group-item">${dt1.email}</li>
            </ul>
          </table>`
        });
        document.getElementById("show3").innerHTML=data1;
    }).catch(error => console.log(error));
    
}
