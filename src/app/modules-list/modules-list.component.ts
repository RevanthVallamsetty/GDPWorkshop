import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.scss']
})
export class ModulesListComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
 
 
 detail(modulenum:number){
  
    console.log(modulenum)
   var btns = document.getElementsByName("modules")
   console.log(btns)
   btns.forEach(function(btn){
     if(btn.classList.contains("isEnabled")){
      btn.classList.remove("isEnabled");
      btn.classList.add("isDisabled");
     }
   })
    switch(modulenum){
      case 1:
       document.getElementById("mod1").classList.remove("isDisabled");
       document.getElementById("mod1").classList.add("isEnabled");
       break
      case 2:
       document.getElementById("mod2").classList.remove("isDisabled");
       document.getElementById("mod2").classList.add("isEnabled");
       break
      case 3:
       document.getElementById("mod3").classList.remove("isDisabled");
       document.getElementById("mod3").classList.add("isEnabled");
       break
      case 4:
      document.getElementById("mod4").classList.remove("isDisabled");
      document.getElementById("mod4").classList.add("isEnabled");
      break
      case 5:
       document.getElementById("mod5").classList.remove("isDisabled");
       document.getElementById("mod5").classList.add("isEnabled");
       break
       case 6:
       document.getElementById("mod6").classList.remove("isDisabled");
       document.getElementById("mod6").classList.add("isEnabled");
       break
       case 7:
       document.getElementById("mod7").classList.remove("isDisabled");
       document.getElementById("mod7").classList.add("isEnabled");
       break
    }
  }

}
