$(function(){
  
  $("#time").datepicker({
    "dateFormat": "yy-mm-dd",
    changeMonth: true,
    changeYear: true
  });

  $("#accordion").accordion();

  var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    $( "#tags" ).autocomplete({
      source: availableTags
    });
});
