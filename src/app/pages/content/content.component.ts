import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  private id: string | null = "0";

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id:string | null): void {
    const data = dataFake.filter((item) => item.id.toString() === id)[0];
    this.contentTitle = data.title;
    this.contentDescription = data.description;
    this.photoCover = data.photo;
  }
}
