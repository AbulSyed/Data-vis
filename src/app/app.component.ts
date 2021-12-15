import { Component, OnInit } from '@angular/core';
import embed from 'vega-embed';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.embedGraph();
  }

  async embedGraph(): Promise<void> {
    const spec = "https://abulsyed.github.io/stats/test.json";
    const result = await embed("#vis1", spec);
    console.log(result.view);
  }
}