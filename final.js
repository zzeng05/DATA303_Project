document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('visualization-select').addEventListener('change', function(e) {
      var selectedPart = e.target.value; 
      var elementToScrollTo = document.getElementById(selectedPart);  
      if (elementToScrollTo) {  
        elementToScrollTo.scrollIntoView({behavior: "smooth"}); 
      }
    });
  });
