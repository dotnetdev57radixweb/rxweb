import { Component, OnChanges, SimpleChanges, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CompareCompleteComponent } from 'src/assets/examples/reactive-form-validators/decorators/compare/complete/compare-complete.component';
import { CompareDynamicComponent } from 'src/assets/examples/reactive-form-validators/decorators/compare/dynamic/compare-dynamic.component';
import { DisqusComponent } from '../../shared/disqus/disqus.component';
import { HttpClient, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@Component({
  templateUrl: './compare.component.html',
  entryComponents: [
DisqusComponent
  ]
})
export class CompareComponent implements OnInit {
  showComponent: boolean = false;
  options: any = { responseType: 'text' };
  codeContent:any = {};
  sidebarLinks:any = {"compare":null,"When to use":null,"Basic Compare Validation":null,"CompareConfig":["fieldName","message"],"Complete Compare Example":null,"Dynamic Compare Example":null};
  tab_1:string = "basicadd";
   tab_2:string = "fieldNamemodel";
   tab_3:string = "messageModel";
   tab_4:string = "completeexample";
   tab_5:string = "dynamicexample";
   
  constructor(
    private http: HttpClient   ,private mergeDashPipe:MergeDashPipe
  ) {
  }
  ngOnInit(): void {
	this.http.get('assets/examples/reactive-form-validators/decorators/compare/compare.json',this.options).subscribe((response:object) => {
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
