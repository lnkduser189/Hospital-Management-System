// ==============================
// Hospital Appointment Management System
// ==============================

// Check if appointment form exists
const form = document.getElementById("appointmentForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const appointment = {

            name: document.getElementById("name").value,

            email: document.getElementById("email").value,

            doctor: document.getElementById("doctor").value,

            date: document.getElementById("date").value,

            time: document.getElementById("time").value

        };

        // Get existing appointments
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // Add new appointment
        appointments.push(appointment);

        // Save to localStorage
        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Appointment Booked Successfully!");

        form.reset();

        // Redirect to My Appointments page
        window.location.href = "appointments.html";

    });

}



// ==============================
// Display Appointments
// ==============================

function displayAppointments() {

    const appointmentList = document.getElementById("appointmentList");

    // If not on appointments page, stop here
    if (!appointmentList) {
        return;
    }

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    appointmentList.innerHTML = "";

    if (appointments.length === 0) {

        appointmentList.innerHTML = `
            <div class="no-appointments">
                <h2>No Appointments Booked</h2>
                <p>Book your first appointment from the Appointment page.</p>
            </div>
        `;

        return;

    }

    appointments.forEach(function (appointment, index) {

        const card = document.createElement("div");

        card.className = "appointment-card";

        card.innerHTML = `

            <h3>${appointment.name}</h3>

            <p><strong>Email:</strong> ${appointment.email}</p>

            <p><strong>Doctor:</strong> ${appointment.doctor}</p>

            <p><strong>Date:</strong> ${appointment.date}</p>

            <p><strong>Time:</strong> ${appointment.time}</p>

            <button onclick="cancelAppointment(${index})">
                Cancel Appointment
            </button>

        `;

        appointmentList.appendChild(card);



    });


    
}



// ==============================
// Cancel Appointment
// ==============================

function cancelAppointment(index) {

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const confirmDelete = confirm("Are you sure you want to cancel this appointment?");

    if (!confirmDelete) {
        return;
    }

    appointments.splice(index, 1);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    displayAppointments();

}



// ==============================
// Load Appointments Automatically
// ==============================

displayAppointments();