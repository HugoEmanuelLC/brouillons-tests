const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTJmOWI5NjgxODNkZjI1MTkzZmU1MmU0YzRmODViZiIsInN1YiI6IjYzYWNiNzllYzgxMTNkMDBhMDI4MjFiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qgY78uATNXnVYR0plkDVoVxwIYIt-_vSwyvjQOUArzU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(title => {
            console.log(title);
        });
    })
    .catch(err => console.error(err));