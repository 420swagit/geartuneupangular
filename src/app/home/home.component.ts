import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template:`
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location></app-housing-location>
  </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    housingLocation: HousingLocation = {
      id: 1,
      name: 'The Bay Club',
      city: 'Tampa',
      state: 'FL',
      photo: 'https://s3.amazonaws.com/ionic-io-static/3e3b0f8e-ionic-io_ionic-view-1.jpg',
      availableUnits: 3,
      wifi: true,
      laundry: true
    }
}
