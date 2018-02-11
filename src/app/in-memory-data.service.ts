import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const artists = [
		{ id: 1, name: "Hans Zimmer", genre : "Soundtracks", Image:"../assets/img/hansZimmer.jpg" },
		{ id: 2, name: "Eminem", genre : "Rap", Image:"../assets/img/eminem.jpg" },
		{ id: 3, name: "Michael Jackson", genre : "POP", Image:"../assets/img/michaelJackson.jpg" },
		{ id: 4, name: "Beyonce", genre : "Pop", Image:"../assets/img/beyonce.jpg" },
		{ id: 5, name: "The Weeknd", genre : "Pop", Image:"../assets/img/theWeeknd.jpg" },
		{ id: 6, name: "Daft Punk", genre : "Rap", Image:"../assets/img/daftPunk.jpg" },
		{ id: 7, name: "Kendrick Lamar", genre : "Rap", Image:"../assets/img/kendrickLamar.jpg" },
		{ id: 8, name: "Kanye West", genre : "Rap", Image:"../assets/img/kanyeWest.jpg" },
		{ id: 9, name: "Justin Timberlake", genre : "Pop", Image:"../assets/img/justinTimberlake.jpg" },
	];

	const songs = [
		{
			id: 1,
			title: "Believe",
			genre : "Rap",
			artist:"Eminem",
			featuredArtists:"",
			album:"Revival",
			albumCover:"../assets/img/eminem.jpg",
			path:"../assets/img/eminem.jpg",
			releaseDate:"2017"
		},
		{
			id: 2,
			title: "Starboy",
			genre : "Pop",
			artist:"The Weeknd",
			featuredArtists:"Daft Punk",
			album:"Starboy",
			albumCover:"../assets/img/eminem.jpg",
			path:"../assets/img/eminem.jpg",
			releaseDate:"2017"
		},
		{
			id: 3,
			title: "Humble",
			genre : "Rap",
			artist:"Kendrick Lamar",
			featuredArtists:"",
			album:"Damn",
			albumCover:"../assets/img/eminem.jpg",
			path:"../assets/img/eminem.jpg",
			releaseDate:"2017"
		},
		{
			id: 4,
			title: "Rockstar",
			genre : "Rap",
			artist:"Post Malone",
			featuredArtists:"21 Savage",
			album:"Rockstar",
			albumCover:"../assets/img/eminem.jpg",
			path:"../assets/img/eminem.jpg",
			releaseDate:"2017"
		},
		{
			id: 5,
			title: "Element",
			genre : "Rap",
			artist:"Kendrick Lamar",
			featuredArtists:"",
			album:"Damn",
			albumCover:"../assets/img/eminem.jpg",
			path:"../assets/img/eminem.jpg",
			releaseDate:"2017"
		},
	  ];

    return {artists, songs};
  }
}
