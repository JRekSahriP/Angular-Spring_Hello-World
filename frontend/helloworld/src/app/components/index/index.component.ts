import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private api:MessageService, private route:ActivatedRoute) { }

  message:string = "loading...";

  ngOnInit(): void {
    let text = this.getText();
    
    this.api.getMessage(text).subscribe({
      next: data => {
        this.message = data;
      },
      error: err => {this.message = "error to get message";}
    });
  }


  private getText():string {
    let text:string = "hello";
    this.route.params.subscribe(params => {
      text = params['text'];
    });
    return text;
  }
}
