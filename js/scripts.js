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
    	$("#takayama").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();
    	$("#munich").hide();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "history" && quizQuestion5 === "relax") {
    	$("#munich").show();
    	$("#santiago").hide();
    	$("#takayama").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "history" && quizQuestion5 === "adventure") {
    	$("#takayama").show();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "mountain" && quizQuestion4 === "modern" && quizQuestion5 === "relax") {
    	$("#tokyo").show();	
    	$("#takayama").hide();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();			
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "beach" && quizQuestion4 === "history" && quizQuestion5 === "relax") {
    	$("#amsterdam").show();
    	$("#tokyo").hide();	
    	$("#takayama").hide();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide(); 
    } else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "beach") {
    	$("#rio").show();	
    	$("#amsterdam").hide();
    	$("#tokyo").hide();	
    	$("#takayama").hide();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide(); 
		} else if(quizQuestion1 === "abroad" && quizQuestion2 === "urban" && quizQuestion3 === "beach" && quizQuestion4 === "modern" && quizQuestion5 === "adventure") {
			$("#tokyo").show();
			$("#takayama").hide();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide(); 	
	  } else if(quizQuestion1 === "abroad" && quizQuestion2 === "countryside" && quizQuestion3 === "beach" && quizQuestion4 === "modern" && quizQuestion5 === "relax") {
			$("#iceland").show();
			$("#rio").hide();
			$("#amsterdam").hide();
    	$("#tokyo").hide();	
    	$("#takayama").hide();
    	$("#munich").hide();
    	$("#santiago").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();			
		} else if(quizQuestion1 === "abroad" && quizQuestion2 === "countryside" && quizQuestion3 === "mountain") {
			$("#munich").show();
			$("#santiago").hide();
    	$("#takayama").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#thailand").hide();
    	$("#domestic").hide();
    	$("#none").hide();
		} else if(quizQuestion1 === "abroad" && quizQuestion2 === "countryside" && quizQuestion3 === "beach") {
			$("#thailand").show();
			$("#munich").hide();
			$("#santiago").hide();
    	$("#takayama").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#domestic").hide();
    	$("#none").hide();																
		} else if(quizQuestion1 === "domestic") {
			$("#domestic").show();
			$("#thailand").hide();
			$("#munich").hide();
			$("#santiago").hide();
    	$("#takayama").hide();
    	$("#tokyo").hide();
    	$("#amsterdam").hide();
    	$("#rio").hide();
    	$("#iceland").hide();
    	$("#none").hide();								
  	} else {
  		$("#none").show();
  	}
  		 
  event.preventDefault();
  });
});