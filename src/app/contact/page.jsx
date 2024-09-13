import React from "react";

function Contact() {
  return (
    <div>
      <form className="flex justify-center items-center w-dvw h-dvh">
        <div className="flex flex-col">
          <label htmlFor="">label</label>
          <input type="text" className="border " />
        </div>
        <button></button>
      </form>
    </div>
  );
}

export default Contact;


// const btn = document.getElementById('button');
// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    btn.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_0ra71df';

//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//       btn.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//       btn.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });