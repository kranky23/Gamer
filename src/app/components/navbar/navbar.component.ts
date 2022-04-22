import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public logOutUser()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("alphabet");
    localStorage.removeItem("email");
    localStorage.removeItem("appid");
    localStorage.removeItem("id");
    localStorage.removeItem("lname");

    localStorage.removeItem("fname");
    window.location.href = "login"
    // this.router.navigate(['']);
    // location.reload();
  }

}
