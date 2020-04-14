	$("#boton0").click(function(e){
		$.ajax({
			url:`https://jsonplaceholder.typicode.com/comments?postId=${$("#valorPostid").val()}`,
			type: "get",
			dataType: "json",
			headers: {'Access-Control-Allow-Origin': '*'},
			async: true,
			
			success: function(result){
				
					for(let i=0;i<result.length;i++){
						$('#Postid1').append(` name : ${result[i].name} email: ${result[i].email}<br><br>`);
					}

			},
			error: function(...result){
				alert('Error')	;
				}	
		})
	});	
	

	

	$("#boton").click(function(e){
		$.ajax({
			url:`https://jsonplaceholder.typicode.com/comments?postId=1&id=${$("#valor").val()}`,
			type: "get",
			dataType: "json",
			headers: {'Access-Control-Allow-Origin': '*'},
			async: true,
			
			success: function(result){
				
				if ($("#valor").val() < 6 && $("#valor").val() > 0 ) {
					for(let i=0;i<result.length;i++){
						$('#exito').append(` name : ${result[i].name} email: ${result[i].email}<br><br>`);
					}
				} else {
					document.getElementById("fracaso").innerHTML = "Id fuera de rango";
				}
			},
			error: function(...result){
				alert('Error')	;
				}	
		})
	});	

