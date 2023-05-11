document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('visualization-select').addEventListener('change', function(e) {
      var selectedPart = e.target.value;  // get the selected value
      var elementToScrollTo = document.getElementById(selectedPart);  // find the corresponding article
  
      if (elementToScrollTo) {  // if we found the article
        elementToScrollTo.scrollIntoView({behavior: "smooth"});  // scroll to it
      }
    });
  });
