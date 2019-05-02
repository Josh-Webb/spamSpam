console.log("Whatever");



customers.forEach(customer => {
    //Customer Array is inside the function.  customers is an array and contacts is and object.
    customerArray = customer.contacts;
    console.log(customerArray, "customer array")
    emailArray = customerArray.email;
    console.log(emailArray, "email array");
    spamCan = document.getElementById("container");
    spamCan.innerHTML += `<h2>${emailArray}</h2>`;
    
})



