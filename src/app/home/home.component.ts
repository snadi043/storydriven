import { Component, OnInit } from '@angular/core';
import { ImageapiService } from '../imageapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Dependency Injection in the constructor lifecycle hook


  image: any;
  constructor(private imageApiService: ImageapiService) { }

  //  Initialization of the images as soon as the componet gets executed during run time

  ngOnInit(): void {
    this.getImage('https://staging.maracielo.com/gallery/');
  }

  //  Using observables to check continuosly for changes in the data

  getImage(url: string): void {
    console.log('hello world');
    this.imageApiService.getFiles(url)
      .subscribe(image => {
        this.image = image;
      });
  }
}




