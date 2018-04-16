

 $(document).ready(function() {
        
          var openFunction = ["fastfood", "chicken", "rice", "drinks"];

          openFunction.forEach(function(openFunction) {
            var userInput = $("." + openFunction).val();
            $("." + openFunction).toogle(userInput).val();
          });

    
   


