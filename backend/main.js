// Function to serve the React app (index.html)
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

// Function to include other HTML files if needed
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function validateEmail(email) {
  var sheet = SpreadsheetApp.openById('16x-Nz_3boUIb6H6iOgwr_UZvfyUncjFmvd3WRICzDC0').getSheetByName('Owner Details');
  var data = sheet.getRange('E2:E').getValues(); // Get values from column E

  for (var i = 0; i < data.length; i++) {
    var cellValue = data[i][0];

    if (!cellValue) {
      continue;
    }
    if (cellValue === email) {
      return true; 
    }
  }
  throw new Error("Email not registered");
}



