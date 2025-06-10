import { Component } from '@angular/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-funcionalidades',
  imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressSpinnerModule],
  templateUrl: './funcionalidades.component.html',
  styleUrl: './funcionalidades.component.css'
})
export class FuncionalidadesComponent {
value = 50 ;
mode: ProgressSpinnerMode = 'determinate';

}
//value = 50 ;
// mode: ProgressSpinnerMode = 'determinado';
