import { Component, OnInit } from '@angular/core';
import { GetAppListService } from 'src/app/services/get-app-list.service';

@Component({
  selector: 'app-random-game',
  templateUrl: './random-game.component.html',
  styleUrls: ['./random-game.component.css']
})
export class RandomGameComponent implements OnInit {

  constructor(private getAppListService : GetAppListService) { }

  detailed_description : string = "";
  short_description : string = "";
  minimum_pc_requirements : string = "";
  recommended_pc_requirements : string = "";
  header_image : string = "";
  gameid: number = 0;
  name:string = "";
  genres:any[] =[];
  screenshots:any[] =[];

  getGame : boolean = false;
  appIds:number[] = [];

  ngOnInit(): void {
    this.getAppListService.gameList().subscribe(
      (data:any) => {

        console.log('THe obtained list of questions is ',data)
        console.log(data[0].applist.apps[1].name)

        for(var i=0;i<139715;i++)
        {
          this.appIds[i] = data[0].applist.apps[i].appid
        }
        console.log("length of the appIds is ",this.appIds.length)
        console.log("AppIDs are ",this.appIds)
    
      },
      (error:any) => {console.log('Error obtaining games!',error)}
    )
  }

  public randomNumber(min: number, max: number) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

  public async getRandomGame()
  {
    console.log("got clicked")
    let found:boolean = false;
    // let appid:number = JSON.parse(localStorage.getItem("appid")!);
    
    while(!found)
    {
      let appid = this.randomNumber(10,139714);
      const data : any = await this.getAppListService.getGameDetails(this.appIds[appid]).toPromise();
      var index = this.appIds[appid];
      console.log("data is ", data[this.appIds[appid]].success);
      if(data[index].success==true)
      {
        console.log('THe obtained game details are  ',data[index].data.detailed_description) 
        found = true;
        this.detailed_description = data[index].data.detailed_description;
        this.short_description = data[index].data.short_description;
        this.name = data[index].data.name;
        this.minimum_pc_requirements = data[index].data.pc_requirements.minimum;
        this.recommended_pc_requirements = data[index].data.pc_requirements.recommended;
        this.header_image = data[index].data.header_image;
        this.genres = data[index].data.genres;
        this.screenshots = data[index].data.screenshots;
        // break;
      }

      
      // appid = 100;
      console.log(appid);
    //   this.getAppListService.getGameDetails(appid).subscribe(
    //     (data:any) => {

    //       if(data[appid].success==true)
    //       {
    //         console.log('THe obtained game details are  ',data[appid].data.detailed_description)

    //         this.detailed_description = data[appid].data.detailed_description;
    //         this.short_description = data[appid].data.short_description;
    //         this.name = data[appid].data.name;
    //         this.minimum_pc_requirements = data[appid].data.pc_requirements.minimum;
    //         this.recommended_pc_requirements = data[appid].data.pc_requirements.recommended;
    //         this.header_image = data[appid].data.header_image;
    //         this.genres = data[appid].data.genres;
    //         this.screenshots = data[appid].data.screenshots;
    //         // console.log(this.genres[0].description)
    //         found = true;
    //       }
      
    //     },
    //     (error:any) => {
    //       console.log('Error obtaining game details!',error)
    //   }
    //   )
    }
    this.getGame = true;
  }

}
