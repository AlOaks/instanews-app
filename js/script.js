$(function(){

 

  $(".load-gif").hide();
  

  $(".select-box").change(function(){
    
    var selection = $(".select-box").val();
    console.log(selection);

    var url = "https://api.nytimes.com/svc/topstories/v2/"+selection+".json";
  url += '?' + $.param({'api-key': "58e7447484524db69db97ecdede76026"});

    $(".load-gif").show();
    
    $.ajax({
      url: url,
      method: 'GET',
      dataType: "json"
    }).done(function(result) {
      console.log(result);
      $(".load-gif").hide();
      $(".news-feed").empty();
      for (var i=0; i<12; ++i){
        $(".news-feed").append("<a href='"+result.results[i].url+"' class='article-link'><div class='article' style='background-image: url("+result.results[i].multimedia[4].url+")'><h2 class='news-text'>"+result.results[i].abstract+"</h2></div></a>");
      }
    }).fail(function(err) {
      throw err;
    });  
  })

  $(".select-box").selectric();


});