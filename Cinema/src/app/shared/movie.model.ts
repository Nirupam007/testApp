export class Movie{
    id:number | string;
    name:string;
    language:string;
    location:string;
    showsTime:string;
    rating:number;
    posterUrl:string;
    checked:boolean
    constructor(public MovieId:number | string,public Moviename:string,public Movielanguage:string,public Movielocation:string,public showTime: string, public MovieRating:number, public MoviePoster:string,public chk:boolean){
            this.id = MovieId;
            this.name = Moviename;
            this.language = Movielanguage;
            this.location = Movielocation;
            this.rating = MovieRating;
            this.showTime = showTime;
            this.posterUrl = MoviePoster;
            this.checked = chk
    }
}