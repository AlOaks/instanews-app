$(function(){
var a = 1;
    var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
url += '?' + $.param({'api-key': "58e7447484524db69db97ecdede76026"});



$.ajax({
  url: url,
  method: 'GET',
  dataType: "json"
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});


});