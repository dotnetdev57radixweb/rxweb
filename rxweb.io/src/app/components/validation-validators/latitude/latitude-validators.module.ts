import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { LATITUDE_ROUTING } from './latitude.routing';
import { LatitudeComponent } from './latitude.component';
import { LatitudeExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/latitude/latitude.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@NgModule({
  imports: [
    LATITUDE_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, LatitudeExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [LatitudeComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[MergeDashPipe]
})
export class LatitudeValidatorsModule { }

