import { Injectable } from '@angular/core';
import { List } from './listing/listing.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  listing: List[] = [
    new List(
      'Mar Mikhael', '195 Kilometers away', new Date(), 171, 4.1,
      'https://images.pexels.com/photos/13415959/pexels-photo-13415959.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      { lat: 33.9015, lng: 35.5237 }
    ),
    new List(
      'Central Military Club', '185 Kilometers away', new Date(), 250, 3.9,
      'https://images.pexels.com/photos/6091193/pexels-photo-6091193.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.897349558489125, lng: 35.47030448913574 }
    ),
    new List(
      'Lebanon', '185 Kilometers away', new Date(), 100, 5.0,
      'https://images.pexels.com/photos/136739/pexels-photo-136739.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.8966, lng: 35.4823 }
    ),
    new List(
      'Beirut Central District', '185 Kilometers away', new Date(), 230, 4.5,
      'https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.9055, lng: 35.5069 }
    ),
    new List(
      'Mar Elias', '185 Kilometers away', new Date(), 99, 4.2,
      'https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800',
      { lat: 33.8772, lng: 35.4886 }
    ),
    new List(
      'ABC Verdun', '155 Kilometers away', new Date(), 280, 4.8,
      'https://images.pexels.com/photos/12993543/pexels-photo-12993543.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
      { lat: 33.8843, lng: 35.4846 }
    ),
  ]

  getList() {
    return this.listing;
  }
}