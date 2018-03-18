$(function(){

  $(".load-gif").hide();


  $("#select").change(function(){

    
    var selection = $("#select").val();
    console.log(selection);

    if(selection == ("Sections...")){
      
      
    };

    var url = "https://api.nytimes.com/svc/topstories/v2/"+selection+".json";
  url += '?' + $.param({'api-key': "58e7447484524db69db97ecdede76026"});

    if(selection == ("Sections...")){
      $(".news-feed").empty();
      $(".news-resize").addClass("news-logo");
      $(".news-resize").removeClass("news-resize");
      $(".select-resize").addClass("select-box");
      $(".select-box").removeClass("select-resize");
    } else 
    $(".load-gif").show();
    
    $.ajax({
      url: url,
      method: 'GET',
      dataType: "json"
    }).done(function(result) {
      console.log(result);
      $(".news-logo").addClass("news-resize");
      $(".news-resize").removeClass("news-logo");
      $(".select-box").addClass("select-resize");
      $(".select-resize").removeClass("select-box");
      $(".load-gif").hide();
      $(".news-feed").empty();
      for (var i=0; i<12; ++i){
        if(result.results[i].multimedia[4]){
          $(".news-feed").append("<a href='"+result.results[i].url+"' class='article-link'><div class='article' style='background-image: url("+result.results[i].multimedia[4].url+")'><h2 class='news-text'>"+result.results[i].abstract+"</h2></div></a>");
        } else {
          console.log(result.results);
          result.results.splice(i,1);
          --i;
        }
    }
    }).fail(function(err) {
      throw err;
    });  
  })
  

  $(".select-box").selectric();


});