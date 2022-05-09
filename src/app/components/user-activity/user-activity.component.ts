import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/activity';
import { CommentOpsService } from 'src/app/services/comment-ops.service';
import { GetAppListService } from 'src/app/services/get-app-list.service';

@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit {

  constructor(private getAppListService : GetAppListService, private commentOpsService:CommentOpsService) { }

  map = new Map<number, string>(); 
  commentsLoaded = false;
  gameNames:string[] = [];
  activities:Activity[] = [];

  async ngOnInit(): Promise<void> 
  {
    const res : any =await this.getAppListService.gameList().toPromise();

    for(var i=0;i<141794;i++)
    {
      let key = res[0].applist.apps[i].appid;
      this.map.set(key, res[0].applist.apps[i].name);
      this.map.get(key); // return "value"
    }

    console.log(this.map);
    console.log(this.map.get(1264170))
  }

  async getGamerComments()
  {
    console.log("invoked get user comments!");
    
    const res : any =await this.commentOpsService.getUserComments().toPromise();

    console.log("User comments obtained are ",res);
    console.log(this.map.get(res[1].steamid));
    this.activities = res;
    for(let i=0;i<res.length;i++)
    {
      this.gameNames[i] = this.map.get(res[i].steamid)!;
    }
    console.log(this.gameNames);
    console.log(this.activities);

    this.commentsLoaded = true;
  }

}
