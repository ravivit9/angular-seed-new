import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NameListService } from './name-list/name-list.service';
import { MdButtonModule, MdSliderModule, MdSlideToggleModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, RouterModule, MdButtonModule,MdSliderModule, MdSlideToggleModule, MdCardModule],
  declarations: [ToolbarComponent, NavbarComponent],
  exports: [ToolbarComponent, NavbarComponent,
    CommonModule, FormsModule, RouterModule, MdButtonModule,MdSliderModule, MdSlideToggleModule, MdCardModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [NameListService]
    };
  }
}
