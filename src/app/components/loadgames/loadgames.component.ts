import { Component, OnInit } from '@angular/core';
import { GameDetails } from 'src/app/game-details';
import { Gamer } from 'src/app/gamer';
import { Games } from 'src/app/games';
import { GetAppListService } from 'src/app/services/get-app-list.service';
import { InsertgamesService } from 'src/app/services/insertgames.service';

@Component({
  selector: 'app-loadgames',
  templateUrl: './loadgames.component.html',
  styleUrls: ['./loadgames.component.css']
})
export class LoadgamesComponent implements OnInit {

  constructor(private getAppListService : GetAppListService,
    private insertgamesService : InsertgamesService) { }


  appIds:number[] = [];
  appNames:string[] = [];

  game!: Games;
  gamedetails!:GameDetails;

  async ngOnInit(): Promise<void> {

    const data : any = await this.getAppListService.gameList().toPromise();
 

        for(var i=0;i<139715;i++)
        {
          this.appIds[i] = data[0].applist.apps[i].appid;
          this.appNames[i] = data[0].applist.apps[i].name;
        }
        console.log("length of the appIds is ",this.appIds.length);
        console.log("AppIDs are ",this.appIds);
        console.log("AppNames are ",this.appNames);
        this.appNames.sort();
        // await this.insertGames();
  }


  async insertGames() : Promise<void> 
  {
    for(var i=0;i<0;i++)
    {
      this.game = new Games();
      // console.log(this.appIds[i],this.appNames[i]);
      this.game.steamid = this.appIds[i];
      this.game.title = this.appNames[i];

      // console.log("game is ",this.game);

      // const data : any = await this.insertgamesService.insert(this.game).toPromise();
      this.insertgamesService.insert(this.game).subscribe(
        (response:any)=>{
          // console.log(response);
          // this.router.navigate(['mood']) // this works like crazy
          
        },
        error=>{ console.log(error)}
      );
    }
    
  }
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async loadGameDetails()
  {
    for(let i=3800;i<5000;i++)
    {
      const data : any = await this.getAppListService.getGameDetails(this.appIds[i]).toPromise();
      var index = this.appIds[i];
      console.log(data);
      if(data[index].success==true && data[index].data.type==="game" && data[index].data.genres!=null)
      {
        this.gamedetails = new GameDetails;
        this.gamedetails.genre = data[index].data.genres[0].description;
        this.gamedetails.startsWith = data[index].data.name.charAt(0);
        this.gamedetails.steamid = data[index].data.steam_appid;
        this.gamedetails.title = data[index].data.name;
        if(data[index].data.release_date.coming_soon==true)
          this.gamedetails.releasedate = data[index].data.release_date.date;

        console.log(this.gamedetails , "i value is ", i);
        
      const res : any = await this.insertgamesService.insertGameDetails(this.gamedetails).toPromise();

      }
      await this.delay(1530);
    }
  }

}
