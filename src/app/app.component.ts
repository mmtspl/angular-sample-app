import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample-app';
  allowNewServer = false;  
	constructor() {
		setTimeout(() =>{  
		      this.allowNewServer = true;  
		    }, 5000);  
	}  
  
	 todaydate = new Date();  
	  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
	  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
	  
  ngOnInit() {  
  }  
}

