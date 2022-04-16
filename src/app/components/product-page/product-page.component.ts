import { Component, OnInit } from '@angular/core';
import { GetAppListService } from 'src/app/get-app-list.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private getAppListService : GetAppListService) { }

  detailed_description : string = "";
  short_description : string = "";
  minimum_pc_requirements : string = "";
  recommended_pc_requirements : string = "";
  header_image : string = "";
  gameid: number = 0;
  name:string = "";
  genres:any[] =[]
  screenshots:any[] =[]

  ngOnInit(): void 
  {
    // this.gameid = parseFloat(localStorage.getItem("appid"));
    const appid:number = JSON.parse(localStorage.getItem("appid")!);
    this.getAppListService.getGameDetails(appid).subscribe(
      (data:any) => {

        console.log('THe obtained game details are  ',data[appid].data.detailed_description)

        this.detailed_description = data[appid].data.detailed_description;
        this.short_description = data[appid].data.short_description;
        this.name = data[appid].data.name;
        this.minimum_pc_requirements = data[appid].data.pc_requirements.minimum;
        this.recommended_pc_requirements = data[appid].data.pc_requirements.recommended;
        this.header_image = data[appid].data.header_image;
        this.genres = data[appid].data.genres;
        this.screenshots = data[appid].data.screenshots;
        // console.log(this.genres[0].description)
        

    
      },
      (error:any) => {
        console.log('Error obtaining game details!',error)
    }
    )
  }

}
