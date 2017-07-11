var btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('search movie with ajax');
  var movieName = document.querySelector('input').value;
  var settings = {
    url: 'http://omdbapi.com/',
    data: {
      s: movieName,
      apikey: '2f6435d9'
    }
  }

  $.ajax(settings).done(function(movie) { // response is json
    resultUl = document.querySelector('.results');
    aTag = document.querySelector('a');
    if (movie.totalResults > 10 ) {
      for (var i = 0; i < 10; i++) {
        var item = document.createElement('h2');
        var listItem = document.createElement('li');
        appendLink(movie.Search[i].Title, item)
        listItem.appendChild( item );
        resultUl.appendChild( listItem );
      }
    }
  });
});

function appendLink(movieName, item){
  var titleSetting = {
    url: 'http://omdbapi.com/',
    data: {
      t: movieName,
      // page: 1,
      apikey: '2f6435d9'
    }
  }

  $.ajax(titleSetting).done(function(movieDetails) {
    var title = "jaws";
    var aTag = document.createElement('a');
    if ( movieDetails.Website === "N/A") {
      aTag.textContent = movieName;
    } else {
      aTag.textContent = movieName;
      aTag.href = movieDetails.Website;
      aTag.target="_blank"
    }
    item.appendChild( aTag );
  });
}
