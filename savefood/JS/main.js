


// This is the code that send the data to MongoDB
$(document).ready(function(){
  $('#menu-form').on('submit',function(e){
e.preventDefault();
console.log('submitted');
    var user = $('#user').val();
    var salads = $('#salads').val();
    var starters = $('#starters').val();
    var mainCourse = $('#main-course').val();

    $.ajax( { url: "https://api.mlab.com/api/1/databases/savefood/collections/menu?apiKey=j5c1aUcBodWB3HVjKNqWV_rMK1TuqWqi",
    		  data: JSON.stringify( {
             "user":user,
             "starters":starters,
             "salads":salads,
             "mainCourse":mainCourse

           } ),
    		  type: "POST",
    		  contentType: "application/json",
          success:function(data){
            window.location.assign="./menu-submit-catering/confirmation.html"
          },
          error:function(xhr,status,err){
            console.log(err)
          }
         } );




  });

});


function callnewpage(){
  var eventcode =document.getElementById('eventcode').value;
  console.log("thi is from callnewpage"+eventcode);
  //
 makesaladmenu(eventcode);
};


function makesaladmenu(eventcode){
   // var eventcode = document.getElementById('eventcode').value;

   console.log("this is from makesaldmenu "+eventcode);
    $.ajax({

      url:"https://api.mlab.com/api/1/databases/savefood/collections/menu?q={\"user\":\""+eventcode+ "\"}&apiKey=j5c1aUcBodWB3HVjKNqWV_rMK1TuqWqi"
    }).done(function(data){
      var output = '<form>';
      $.each(data,function(key,data){
            $.each(data.salads.split(","),function(key,data){
              console.log(data);
              output += '<input type="radio">'+data+'<br>';
        //output += '</form>';
      });
      console.log("this is from makesaldmenu "+eventcode);
            console.log(output+'</form>');
            window.location.assign("select-menu-form.html");
              console.log("this is from makesaldmenu "+eventcode);
    $("#saladdiv").html(output);
  });
    });






};
