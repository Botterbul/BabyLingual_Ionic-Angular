import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.page.html',
  styleUrls: ['./item-page.page.scss'],
})
export class ItemPagePage implements OnInit {
  itemId: string;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    public platform: Platform
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('itemId')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.itemId = paramMap.get('itemId');
    });
  }

  playAudio() {
    let audio = new Audio();
    audio.src = '/assets/' + this.itemId + '.m4a';
    audio.load();
    audio.play();
  }

}
