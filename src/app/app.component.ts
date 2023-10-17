import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('screenshotContainer', { static: true }) screenshotContainer?: ElementRef;
  @ViewChild('screenshotCanvas', { static: true }) screenshotCanvas?: ElementRef;

  takeScreenshot() {
    const container = this.screenshotContainer?.nativeElement;
    const canvas = this.screenshotCanvas?.nativeElement;
    const ctx = canvas.getContext('2d');

    canvas.width = container.offsetWidth;
    canvas.height =100;

    const x = 100; // x-coordinate of top-left corner of the cropped area
    const y = 100; // y-coordinate of top-left corner of the cropped area
    const width = 300; // width of the cropped area
    const height = 200; // height of the cropped area

    // Draw the part of the page you want to screenshot onto the canvas
    ctx.drawImage(document.documentElement, x, y, width, height, 0, 0, canvas.width, canvas.height);

    // Get the base64-encoded image data
    const image = canvas.toDataURL();
    console.log(image);
  }
}
