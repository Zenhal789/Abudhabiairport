// -----------------date and time function navbar-------------------//
function updateDateTime() {
    const currentDateTimeElement = $('#current-date-time');

    const now = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = dayNames[now.getDay()];
    const dayOfMonth = String(now.getDate()).padStart(2, '0'); // Ensure two digits for day
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = monthNames[now.getMonth()];
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0'); // Ensure two digits for hours (12-hour format)
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure two digits for minutes
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const formattedDateTime = `${day}, ${dayOfMonth} ${month}, ${hours}:${minutes} ${ampm}`;

    currentDateTimeElement.text(formattedDateTime);

    setTimeout(updateDateTime, 1000); // Update every second
  }

  $(document).ready(function() {
    updateDateTime();
  });
// ------------------------------side buttons hover function------------------------------//

$(document).ready(function() {
    $(".climate").hover(
      function() {
        // Mouse enter
        $("#sun-info").css("display", "block");
      },
      function() {
        // Mouse leave
        $("#sun-info").css("display", "none");
      },
      );
      $(".flight").hover(
        function() {
          // Mouse enter
          $("#sun-info1").css("display", "block");
        },
        function() {
          // Mouse leave
          $("#sun-info1").css("display", "none");
        },
      )
      $(".location").hover(
        function() {
          // Mouse enter
          $("#sun-info2").css("display", "block");
        },
        function() {
          // Mouse leave
          $("#sun-info2").css("display", "none");
        },
      )
      $(".geo").hover(
        function() {
          // Mouse enter
          $("#sun-info3").css("display", "block");
        },
        function() {
          // Mouse leave
          $("#sun-info3").css("display", "none");
        },
      )
  });
 


