import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  cutterCLicked = false;
  rakeClicked = false;

  slideOpts = {
    initialSlide: 1,
    speed: 400,
    // direction: 'vertical',
    effect: 'cube',
    virtualTranslate: false,

  };

  constructor() { }


  ngOnInit() {
  }

  hideOnCutterClicked() {
    this.cutterCLicked = !this.cutterCLicked;
  }

  hideOnRakeClicked() {
    this.rakeClicked = !this.rakeClicked;
  }

}
