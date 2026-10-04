import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';       
     
const module: any = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,

  FormsModule,
  ReactiveFormsModule,
  NgIf,
  MatButtonModule,
  SlickCarouselModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatTabsModule
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    module
  ],
  exports: [
    module
  ]
})
export class ModualModule { }
