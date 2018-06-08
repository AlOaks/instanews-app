import "../sass/style.scss";
import $ from 'jquery';
import selectric from 'selectric';

$(() =>{

  $(".load-gif").hide();

  $("#select").change( () =>{

    let selection = $("#select").val();
    console.log(selection);

    if(selection == ("Sections...")){ 
    };
    let url = `https://api.nytimes.com/svc/topstories/v2/${selection}.json`;

    let key = $.param({'api-key': "58e7447484524db69db97ecdede76026"});

  url += `?${key}` ;

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
    }).done( (result) => {
      console.log(result);
      $(".news-logo").addClass("news-resize");
      $(".news-resize").removeClass("news-logo");
      $(".select-box").addClass("select-resize");
      $(".select-resize").removeClass("select-box");
      $(".load-gif").hide();
      $(".news-feed").empty();
      for (let i=0; i<12; ++i){
        if(result.results[i].multimedia[4]){
          $(".news-feed").append(`<a href='${result.results[i].url}' class='article-link'><div class='article' style='background-image: url("${result.results[i].multimedia[4].url}")'><h2 class='news-text'>${result.results[i].abstract}</h2></div></a>`);
        } else {
          console.log(result.results);
          result.results.splice(i,1);
          --i;
        }
    }
    }).fail((err) => {
      throw err;
    });  
  })
  $(".select-box").selectric();
});