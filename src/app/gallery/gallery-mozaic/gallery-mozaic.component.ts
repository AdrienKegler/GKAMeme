import {Component, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-gallery-mozaic',
  templateUrl: './gallery-mozaic.component.html',
  styleUrls: ['./gallery-mozaic.component.css']
})
export class GalleryMozaicComponent implements OnInit {

  constructor() {
  }

  imgSet = [
    '0 fucks given.gif',
    '200 boner.jpg',
    '200 cringe.jpg',
    '200 glad.png',
    '200 lewd.png',
    '200 meh.jpg',
    '200 murica.png',
    '0 fucks given.gif',
    '200 boner.jpg',
    '200 cringe.jpg',
    '200 glad.png',
    '200 lewd.png'
  ];

  imgtest = '/assets/imgSet/200 glad.png';
  basePath = '/assets/imgSet/';
  test = [];

  getImgSet() {
    return this.imgSet;
  }

  ngOnInit() {
    console.log(this.getImgSet());
    this.imgSet.map(img => {
        this.test.push(this.basePath + img);
      }
    );
  }
}
