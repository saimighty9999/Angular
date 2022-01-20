import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

users=[
{name:"virat",age:43},
{name:"rohit",age:40},
{name:"bumra",age:51},
{name:"jaya",age:55}

]
players=[
  {name:"laal",age:22},
  {name:"laal",age:22},
  {name:"laal",age:22},
  {name:"laal",age:22},
]


selectedCountry="uk"




  flag: boolean=true
  Toggle(){
    if(this.flag===true){
      this.flag=false
    }else{
      this.flag=true
    }
  }
  title = 'demo';
}
