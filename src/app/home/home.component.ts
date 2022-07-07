import { Component, OnInit } from '@angular/core';
import { ImageapiService } from '../imageapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image: any;
  constructor(private imageApiService: ImageapiService) { }

  ngOnInit(): void {
    this.getImage('https://staging.maracielo.com/gallery/');
  }

  getImage(url: string): void {
    console.log('hello world');
    this.imageApiService.getFiles(url)
      .subscribe(image => {
        this.image = image;
      });
  }
}




