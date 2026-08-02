function scrollToAppointment(){

    document
    .getElementById("appointment")
    .scrollIntoView();

}





let form = document.getElementById("appointmentForm");



form.addEventListener("submit", function(event){


    event.preventDefault();



    let appointment = {


        name:
        document.getElementById("name").value,


        email:
        document.getElementById("email").value,


        doctor:
        document.getElementById("doctor").value,


        date:
        document.getElementById("date").value,


        time:
        document.getElementById("time").value


    };



    // Get old appointments

    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];



    // Add new appointment

    appointments.push(appointment);



    // Save data

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );



    alert("Appointment Booked Successfully!");



    form.reset();



    displayAppointments();


});






function displayAppointments(){


    let appointmentList =
    document.getElementById("appointmentList");



    appointmentList.innerHTML="";



    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];



    appointments.forEach(function(app,index){



        let card =
        document.createElement("div");



        card.className="appointment-card";



        card.innerHTML=`

<h3>${app.name}</h3>

<p>
Doctor: ${app.doctor}
</p>

<p>
Date: ${app.date}
</p>

<p>
Time: ${app.time}
</p>


<button onclick="cancelAppointment(${index})">
Cancel Appointment
</button>

`;



        appointmentList.appendChild(card);



    });



}



// Display saved appointments when page loads

displayAppointments();
function cancelAppointment(index){


    let appointments =
    JSON.parse(localStorage.getItem("appointments")) || [];



    appointments.splice(index,1);



    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );



    alert("Appointment Cancelled!");



    displayAppointments();


}