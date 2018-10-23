import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlphaNumericCompleteValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/alphaNumeric/complete/alpha-numeric-complete.component';
import { AlphaNumericDynamicValidatorComponent } from 'src/assets/examples/reactive-form-validators/validators/alphaNumeric/dynamic/alpha-numeric-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@Component({
  templateUrl: './alphaNumeric.component.html',
  entryComponents: [
DisqusComponent
  ]
})
export class AlphaNumericComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"alphaNumeric":null,"When to use":null,"Basic AlphaNumeric Validation":null,"AlphaConfig":["allowWhiteSpace","conditionalExpression","message"],"Complete AlphaNumeric Example":null,"Dynamic AlphaNumeric Example":null};
  tab_1:string = "allowWhiteSpaceComponent";
   tab_2:string = "conditionalExpressionComponent";
   tab_3:string = "messageComponent";
   tab_4:string = "completeexample";
   tab_5:string = "dynamicexample";
   
  constructor(
    private http: HttpClient   ,private mergeDashPipe:MergeDashPipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/validators/alphaNumeric/alphanumeric.json',this.options).subscribe((response:object) => {
      this.codeContent = JSON.parse(response.toString());
	  let splitedArray = location.pathname.split('/');
	  if(splitedArray[2] != undefined)
		document.title = splitedArray[2] + " : " + this.mergeDashPipe.transform(splitedArray[1])
	  else
		document.title = splitedArray[1] ? this.mergeDashPipe.transform(splitedArray[1]) : "RxApp"
	  this.showComponent = true;
    })
  }
  scrollTo(section) {  
    var node = document.querySelector(section);
    node.scrollIntoView(true);
    var scrolledY = window.scrollY;
    if(scrolledY){
      window.scroll(0, scrolledY - 62);
    }
	return false;
  }
}
