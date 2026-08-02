function scrollToAppointment(){

    document
    .getElementById("appointment")
    .scrollIntoView();

}



let form = document.getElementById("appointmentForm");


form.addEventListener("submit", function(event){


    event.preventDefault();


    alert("Appointment Booked Successfully!");

    form.reset();


});