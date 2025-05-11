
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("booking-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual form submission

      const name = document.getElementById("name").value.trim();
      const destinationSelect = document.getElementById("destination");
      const destination = destinationSelect.value;
      const destinationText = destinationSelect.options[destinationSelect.selectedIndex].text;
      const date = document.getElementById("date").value;

      if (destination === "Select Something" || destination === "") {
        alert("Please select a valid destination.");
        return;
      }

      alert(`Thank you, ${name}! Your trip to ${destinationText} on ${date} has been booked.`);
      form.reset();
    });
  });

