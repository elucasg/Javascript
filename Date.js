//Get formatted date as 9-Oct-2017
function formatDate(date) {
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + '-' + monthNames[monthIndex] + '-' + year;
}

//Get formatted date as 09/10/2017
function formatDate(date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1;
  var yyyy = date.getFullYear();

  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }
  return dd + '/' + mm + '/' + yyyy;
}
