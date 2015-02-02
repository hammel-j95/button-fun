$(document).ready(function(){
  $("#hello").dialog({autoOpen:false});
    $("#button").click(function(){
      $("#hello").dialog("open");
      $( "#hello" ).dialog({
        buttons: [
        {
      text: "X",
      click: function() {
        $( this ).dialog( "close" );
      }
    }
   ]
  });
 });
});
