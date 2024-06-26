import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormComponent } from './shared/components/form/form.component';
import { CardOneComponent } from './shared/components/card-one/card-one.component';
import { CardTwoComponent } from './shared/components/card-two/card-two.component';
import { CardThreeComponent } from './shared/components/card-three/card-three.component';
import { ButtonAnchorComponent } from './shared/components/button-anchor/button-anchor.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ListComponent } from './shared/components/list/list.component';
import { SelectComponent } from './shared/components/select/select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    FormComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,
    ButtonAnchorComponent,
    ButtonComponent,
    FooterComponent,
    ListComponent,
    SelectComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'exam_1';
}
