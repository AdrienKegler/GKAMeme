import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  uploadFile(event) {
    const elem = event.target;
    if(elem.files.length > 0) {
        let formData = new FormData();
        console.log(elem.files[0]);
        formData.append('file', elem.files[0]);

        this.http.post('http://GKAMeme/api/files/upload', formData).subscribe((data)=>{
          console.log('The return of the data', data);
        }, (error)=>{
          console.log('Error ! ', error)
        });
    }
  }

}
