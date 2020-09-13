export const people = [
    {
    id:"0",
    name: "niclolas",
    age: 18,
    gender : "female"
},
{
    id:"1",
    name: "dan",
    age: 18,
    gender : "female"
},
{
    id:"2",
    name: "sani",
    age: 18,
    gender : "female"
},
{
    id:"3",
    name: "son",
    age: 18,
    gender : "female"
},
{
    id:"4",
    name: "kim",
    age: 18,
    gender : "female"
}

];


let movies = [
    {
        id:0,
        name: "Start Wars - The new one",
        score: 3
    },
    {
        id:1,
        name: "KingsMan",
        score: 2
    },
    {
        id:2,
        name: "The Godfather 1",
        score: 1
    },
    {
        id:3,
        name: "Logan",
        score: 3
    },
    {
        id:4,
        name: "social network",
        score: 4
    },
    {
        id:5,
        name: "bill gates",
        score: 5
    },
]

export const getMovies = ()=> movies;

export const getById = id =>{
    const filteredMovies = movies.filter(movie => movie.id ===String(id));
    return filteredMovies[0]
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
  };

  export const addMovie = (name,score) =>{
      const newMovie = {
          id: `${movies.length + 1}`,
          name,
          score
      };
      movies.push(newMovie);
      return newMovie;
  }