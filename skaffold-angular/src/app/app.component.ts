import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data$ = null;

  constructor(
    private readonly http: HttpClient
  ) {}

  ngOnInit(): any {
    this.http.get<{ data: string }>('http://localhost:3000').subscribe(res => {
      this.data$ = res.data;
    });
  }
}
