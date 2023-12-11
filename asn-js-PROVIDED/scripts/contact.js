// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', clicked);


function clicked() {
    const newMessage = document.getElementById("contact-page");
    newMessage.textContent = 'Thank you for your message!';
    newMessage.style.fontSize = '24px';
}


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

