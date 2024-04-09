import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  photoCover: string = '../../../assets/imgem_conteudo].jpg';
  contentTitle: string = 'hopihoiçhi';
  contentDescription: string = 'uyiguygigkuyig';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      console.log(params.get('id'));
    });
  }
}
