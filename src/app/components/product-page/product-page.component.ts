import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/comments';
import { Games } from 'src/app/games';
import { CommentOpsService } from 'src/app/services/comment-ops.service';
import { GetAppListService } from 'src/app/services/get-app-list.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private getAppListService : GetAppListService,
    private commentOpsService : CommentOpsService) { }

  detailed_description : string = "";
  short_description : string = "";
  minimum_pc_requirements : string = "";
  recommended_pc_requirements : string = "";
  header_image : string = "";
  gameid: number = 0;
  name:string = "";
  genres:any[] =[]
  screenshots:any[] =[]


  suggestedGames:string[] = [];
  image_links : string[] = [];
  suggestedGamesAppIds:number[] = [];

  appid:number=-1;
  suggestedGamesLoaded:boolean = false;
  /*for storing all the comments when GET method is called*/
  comments:Comments[] = [];

  // for storing the comment to POST it to the dB
  postedComment:Comments = new Comments();
  steamid:number = 0;

  async ngOnInit(): Promise<void> 
  {
    // this.gameid = parseFloat(localStorage.getItem("appid"));
    const appid:number = JSON.parse(localStorage.getItem("appid")!);
    this.getAppListService.getGameDetails(appid).subscribe(
      (data:any) => {
        if(data[appid].success==false)
        {
          alert("Invalid Game details! try another game!");
          window.close();
        }
        console.log('THe obtained game details are  ',data[appid].data.name)

        this.detailed_description = data[appid].data.detailed_description;
        this.short_description = data[appid].data.short_description;
        this.name = data[appid].data.name;
        this.minimum_pc_requirements = data[appid].data.pc_requirements.minimum;
        this.recommended_pc_requirements = data[appid].data.pc_requirements.recommended;
        this.header_image = data[appid].data.header_image;
        this.genres = data[appid].data.genres;
        this.screenshots = data[appid].data.screenshots;
        // console.log(this.genres[0].description)
        
        this.gameid = data[appid].data.steam_appid;
    
      },
      (error:any) => {
        console.log('Error obtaining game details!',error)
    }
    )


    const data : any = await this.getAppListService.gameList().toPromise();

    var count = 0;
    while(count!=3 && !this.suggestedGamesLoaded)
    {
      let i = this.randomNumber(99,132232); // get a random number in the appIDs index.
      console.log(i);
      this.appid = data[0].applist.apps[i].appid; //fetch the SteamID at that random index from the list of steamIDs
      console.log("enidi",this.appid);
      const game : any = await this.getAppListService.getGameDetails(this.appid).toPromise(); //get the game object
      console.log("games var is ",game[this.appid]);

      if(game[this.appid].success==true)
      {
        // if(count==0)
        //   this.suggestedGame_1 = game[this.appid].data.name;
        // else if(count==1)
        //   this.suggestedGame_2 = game[this.appid].data.name;
        // else if(count==2)
        //   this.suggestedGame_3 = game[this.appid].data.name;

        this.suggestedGames[count] = game[this.appid].data.name;
        this.image_links[count] = game[this.appid].data.header_image;
        this.suggestedGamesAppIds[count] = this.appid;
        // this.suggestedGames[count].title = game[this.appid].data.name;
        count++;
      }
    }
    console.log("images links are ",this.image_links);

    
    const res : any = await this.commentOpsService.getComments().toPromise();

    this.comments = res;
    console.log("obtained comments are ",res);
    this.suggestedGamesLoaded = true;

  }

  
  public getGameDetails(appid:any,index:any)
  {
    console.log("function getGameDetails called",appid);

    localStorage.setItem("appid",appid);
    localStorage.setItem("title",this.suggestedGames[appid]);
    console.log(appid)
    window.open('product', '_blank');
    // window.location.href = "product"
  }

  public randomNumber(min: number, max: number) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 

  async onSubmit(postedComment:Comments)
  {
    console.log(postedComment.comment.length);
    if(postedComment.comment.length < 10)
    {
      alert("Review must be of minimum 20 characters!");
      postedComment.comment = "";
    }

    const res : any = await this.commentOpsService.postComment(this.gameid,postedComment).toPromise();

    console.log(res);
    postedComment.comment = "";

    // this.commentOpsService.postComment(this.gameid,postedComment).subscribe(
    //   (data:any) => {
     
    //     console.log('THe obtained response after saving comment is ',data)
    
    //   },
    //   (error:any) => {
    //     console.log('Error storing the comment!',error)
    // }
    // )
    this.ngOnInit();

  }


}
