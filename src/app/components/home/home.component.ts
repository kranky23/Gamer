import { Component, OnInit } from '@angular/core';
import { GetAppListService } from 'src/app/get-app-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getAppListService : GetAppListService) { }

  appIds:number[] = []
  responses:any[] = []

  newReleases:any[] = []

  released:boolean = true

  ngOnInit(): void {
    // const res : any = await this.getAppListService.gameList().toPromise();
    // for(var i=0;i<139715;i++)
    // {
    //   this.appIds[i] = res[0].applist.apps[i].appid
    // }
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

    // this.getNewReleasedGames();
  }

  public apps()
  {
    this.getAppListService.gameList().subscribe(
      (data:any) => {

        console.log('THe obtained list of games is ',data)
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


  public callThisMethod() {
    // for(var i=0;i<this.responses.length;i++)
    {
      // console.log("data is ",this.newReleases[0].data);
      console.log("Newly releaesd data is " ,this.newReleases[0].data.release_date.date);
    }
  }

  public async getNewReleasedGames()
  {
    let index = 0;

    console.log("array values are ",this.appIds)
    for(let i=310;i<320;i++)
    {
      const res : any =await this.getAppListService.newRelease(this.appIds[i]).toPromise();
      var id = this.appIds[i];
      console.log("new code output is " ,res[id]," i value is ",i);

      // this.newReleases[i] = res[id].success;

      if(res[id].success===true)
      {
        console.log("game is valid")
        if(res[id].data.release_date.coming_soon==true)
        {
          this.released = true;

          console.log("Newly released game is ", res[id].data.name);
          this.newReleases[index] = res[id];
          console.log("index value is ",index);
          index++;
        }
      }  

      // console.log("i value is " , this.appIds[i]);
      // this.getAppListService.newRelease(this.appIds[i]).subscribe(
      //    (data:any) => {
      //     // await this.delay(1000);

      //     this.responses[i] = data;
      //     // console.log("i value is ",i)
          
          
      //     console.log(data)
      //     if(data[id].success===true)
      //     {
      //       console.log("game is valid")
      //       if(data[id].data.release_date.coming_soon==true)
      //       {
      //         console.log("Newly released game is ", data[id].data.name);
      //         this.newReleases[index] = data;
      //         console.log("index value is ",index);
      //         index++;
      //       }
      //     }  
      //   },
      //   (error:any) => {
      //     console.log('Error obtaining game details!',error)
      //   }
      // )
        
    }
    if(index==0)
    {
      alert("No new releases!")
    }
    this.callThisMethod();
    // this.released = true;

    // console.log(this.responses.length)
  }

  public getGameDetails(gameid:any)
  {
    localStorage['appid'] = JSON.stringify(gameid);
    // localStorage.setItem("appid",gameid);
    window.open('product', '_blank');
    // window.location.href = "product";
  }

}

