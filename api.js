document.getElementById("time").style.display = "none";

document.getElementById("infoss").addEventListener("submit", (e) => {
    e.preventDefault();
    const busNumber = document.getElementById("Number").value;
    fetchData(busNumber);
});

async function fetchData(busNumber) {
    const api = `https://busapi.amithv.xyz/api/v1/search?vehicle_number=${busNumber}`;
    try {
        const res = await fetch(api);
        if (!res.ok) {
            throw new Error("Bus not found");
        }
        const data = await res.json();

        document.getElementById("submain").style.display = "none";
        document.getElementById("heading").style.margin = '10px 0 0 0';
        document.getElementById("time").style.display = "block";

        displayData(data, busNumber);
    } catch (err) {
        console.log("Error fetching details:", err);

        // Display error message
        const timeData = document.getElementById("time");
        timeData.style.display = "block";
        timeData.innerHTML = ""; 

        const errDiv = document.createElement("div");
        errDiv.classList.add("errDiv");
        errDiv.innerHTML = "Bus not found";
        timeData.appendChild(errDiv);
    }
}

function displayData(data, busNumber) {
    const timeData = document.getElementById("time");
    timeData.innerHTML = ""; 

    data.forEach(vehicle => {
        const busDataSection = document.createElement("div");
        busDataSection.classList.add("busTime");
        busDataSection.innerHTML = `
            <h2>Bus Number: ${busNumber}</h2>
            <p><strong>Trip No: ${vehicle.trip}</strong></p>
        `;

        const stand = document.createElement('ul');

        vehicle.stations.forEach(station => {
            const standList = document.createElement('li');
            standList.innerHTML = `
                <strong>Bus Station: ${station.station}</strong> <br>
                <strong>Arrival Time: ${station.arrivalTime}</strong> <br>
                <strong>Departure Time: ${station.departureTime}</strong>
            `;
            stand.appendChild(standList);
        });

        busDataSection.appendChild(stand);
        timeData.appendChild(busDataSection);
    });
}
