import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightModule } from 'ngx-highlightjs';
import { ClipboardModule } from 'ngx-clipboard';
import { DATA_URI_ROUTING } from './dataUri.routing';
import { DataUriComponent } from './dataUri.component';
import { DataUriExtendedModule } from 'src/assets/examples/reactive-form-validators/validators/dataUri/dataUri.module';
import { DisqusSharedModule } from "src/app/components/shared/disqus/disqus-shared.module";
import { RightSideBarSharedModule } from "src/app/components/shared/right-sidebar/right-sidebar-shared.module";
import { MergeDashPipe } from "src/app/pipes/merge-dash.pipe";

@NgModule({
  imports: [
    DATA_URI_ROUTING,
    CommonModule, FormsModule, ReactiveFormsModule, HighlightModule, DataUriExtendedModule, ClipboardModule,DisqusSharedModule,RightSideBarSharedModule],
  declarations: [DataUriComponent],
  exports: [RouterModule],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers:[MergeDashPipe]
})
export class DataUriValidatorsModule { }

