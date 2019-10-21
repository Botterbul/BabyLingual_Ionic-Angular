import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss'],
})
export class BarcodePage implements OnInit {
  scannedCode = null;
  isLoading = false;

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      if (barcodeData.cancelled) {
        return;
      }
      this.scannedCode = barcodeData.text;
      this.router.navigate(['/', 'item-page', this.scannedCode]);
    });
  }

}
