$(document).ready(function() {
  $("form").submit(function(event) {
  	// Radio question inputs
  	var quizQuestion1 = $("input:radio[name=quizQuestion1]:checked").val(); // "abroad" or "domestic"
  	var quizQuestion2 = $("input:radio[name=quizQuestion2]:checked").val(); // "urban" or "countryside"
  	var quizQuestion3 = $("input:radio[name=quizQuestion3]:checked").val(); // "mountain" or "beach"
  	var quizQuestion4 = $("input:radio[name=quizQuestion4]:checked").val(); // "modern" or "history"
  	var quizQuestion5 = $("input:radio[name=quizQuestion5]:checked").val(); // "adventure" or "relax"
  
  	// Vacation picker results
    if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "modern" && quizQuestion5 === "adventure") {
    	$("#santiago").show();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "history" && quizQuestion5 === "relax") {
    	$("#munich").show();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "history" && quizQuestion5 === "adventure") {
    	$("#takayama").show();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "modern" && quizQuestion5 === "relax") {
    	$("#tokyo").show();			
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "beach" && quizQuestion4 === "history" && quizQuestion5 === "relax") {
    	$("#amsterdam").show(); 
  	} else {
  		$("#none").show();
  	}
  		 
  event.preventDefault();
  });
});