import {
  Component, Input, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'include-content',
  template: `
    <pre><code>{{templateContent}}</code></pre>`
})
export class IncludeContentComponent implements OnInit {
  @Input('src') templateUrl: string;
  
  templateContent: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.templateUrl, { responseType: 'text' }).subscribe((out: any) => {
      this.templateContent = out;
    });
  }
}
