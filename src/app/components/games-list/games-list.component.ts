import { Component, OnInit } from '@angular/core';
// import { map } from 'rxjs';
import { GetAppListService } from 'src/app/services/get-app-list.service';
import { LoadgamesComponent } from '../loadgames/loadgames.component';
import * as gamesList from 'src/app/game-details';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  constructor(private getAppListService : GetAppListService) { }

  appIds:any[] = [];
  appNames:String[] = [];
  loaded:boolean = false;
  map = new Map<string, number>(); 
  map2 = new Map<string, number>(); 
  alphabetLoaded:boolean = false;
  genreLoaded:boolean = false;
  alphabetGames:String[] = [];

  genreGames:String[] = [];

  genres:string[] = ["RPG","Indie","Action","Casual","Adventure","Free to Play","Simulation","Sports","Strategy","Racing"]

  letters:string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  game:any;

  public async ngOnInit(): Promise<void> 
  {
    // let map = new Map<string, number>(); 
    const res : any =await this.getAppListService.gameList().toPromise();
    // console.log(res);
    for(var i=0;i<139715;i++)
    {
      this.appNames[i] = res[0].applist.apps[i].name;
      this.appIds[i] = res[0].applist.apps[i].appid;

      let key = res[0].applist.apps[i].name;
      this.map.set(key, res[0].applist.apps[i].appid);
      this.map.get(key); // return "value"
    }

    console.log(this.map);
    this.appIds.sort();
    // this.getAppListService.gameList().subscribe(
    //   (data:any) => {

    //     console.log('THe obtained list of questions is ',data)
    //     console.log(data[0].applist.apps[1].name)

    //     for(var i=50;i<1350;i++)
    //     {
    //       this.appIds[i] = data[0].applist.apps[i].name
    //     }
    //     console.log("length of the appIds is ",this.appIds.length)
    //     console.log("AppIDs are ",this.appIds)
    
    //   },
    //   (error:any) => {console.log('Error obtaining games!',error)}
    // )
    this.loaded = true;
  }
  public getGameDetails(app:any)
  {
    console.log("function getGameDetails called",app);
    console.log("Game appid is " ,this.map.get(app));
    let appid:string = "" + this.map.get(app) ;
    console.log("appid of the game clicked is ",appid);
    localStorage.setItem("appid",appid);
    localStorage.setItem("title",app);
    console.log(appid)
    window.open('product', '_blank');
    // window.location.href = "product"
  }

  public getAlphabetGames(value:string)
  {
    localStorage.setItem("alphabet",value);
    this.genreLoaded = false;
    console.log(value);
    console.log(this.appNames);
    
    this.alphabetGames = [];
    var index = 0;

    for(var i=0;i<139715;i++)
    {
      if(this.appNames[i].charAt(0)===value.charAt(0))
      {
        this.alphabetGames[index++] = this.appNames[i];
      }
    }
    this.alphabetGames.sort();
    this.alphabetLoaded = true;
    console.log("games starting with ",value," is ", this.alphabetGames,this.alphabetGames.length)
  }

  public async getGamesByGenre(value:string)
  {
    localStorage.setItem("genre",value);
    this.alphabetLoaded = false;
    const res : any = await this.getAppListService.getMyGameDetailsByGenre(value).toPromise();
    console.log(res.length);
    console.log(res);
    
    var index = 0;
    this.genreGames = [];

    for(let i=0;i<res.length;i++)
    {
      this.genreGames[index++] = res[i].title;
      console.log(i);
    }
    console.log("genre games are ",this.genreGames);
    this.genreLoaded = true;

  }


  search()
  {
    if(this.game == "")
    {
      if(this.genreLoaded==true)
        this.getGamesByGenre(localStorage.getItem("genre")!);
      else if(this.alphabetLoaded==true)
        this.getAlphabetGames(localStorage.getItem("alphabet")!)
      
    }
    else
    {
      if(this.genreLoaded==true)
      {
        this.genreGames = this.genreGames.filter(res =>{
          return res.toLocaleLowerCase().match(this.game.toLocaleLowerCase());
        })
      }
      else if(this.alphabetLoaded==true)
      {
        this.alphabetGames = this.alphabetGames.filter(res =>{
          return res.toLocaleLowerCase().match(this.game.toLocaleLowerCase());
        })
      }
    }
  }

}
