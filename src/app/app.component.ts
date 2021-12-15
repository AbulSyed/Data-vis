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
    this.embedGraph("https://abulsyed.github.io/stats/vis/v1.json", "#vis1");
    this.embedGraph("https://abulsyed.github.io/stats/vis/v2.json", "#vis2");
    this.embedGraph("https://abulsyed.github.io/stats/vis/v3.json", "#vis3");
  }

  async embedGraph(spec: string, div: string): Promise<void> {
    const result = await embed(div, spec);
    console.log(result.view);
  }
}