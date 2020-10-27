import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  async ngOnInit(){
    try{
      let body = {
        name:'thomas',
        age:'25'
      }
      let fetchDetails = {
      method:'POST',
      mode:'cors' as RequestMode,
      body:JSON.stringify(body),
      headers:{
          'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer' as ReferrerPolicy
    }
      let url = `http://localhost:3000/account`
      const res = await fetch(url,fetchDetails);
      const details = await res.json();
      console.log(details)
    }catch(error){
      console.log(error);
    }
  }

}
