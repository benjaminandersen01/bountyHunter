import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsQR from "jsqr";
@Component({
  selector: 'app-bounty-claim',
  templateUrl: './bounty-claim.page.html',
  styleUrls: ['./bounty-claim.page.scss'],
})
export class BountyClaimPage implements OnInit {

  @ViewChild('qrCanvas', { static: true }) canvasElement: ElementRef<HTMLCanvasElement>;
  @ViewChild('qrVideo', {static: true}) videoElement: ElementRef<HTMLVideoElement>;
  
  private canvasContext: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit() {
    this.canvasContext = this.canvasElement.nativeElement.getContext('2d');

    this.claimBounty();
  }

  claimBounty(){
    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment"
      }
    }).then( videoStream => {
      console.log(videoStream);
      this.videoElement.nativeElement.srcObject = videoStream;
      this.videoElement.nativeElement.play();

      requestAnimationFrame( () => this.tick())
    })

  }
  tick(){
      if(this.videoElement.nativeElement.readyState === this.videoElement.nativeElement.HAVE_ENOUGH_DATA){
        this.canvasContext.canvas.height = this.videoElement.nativeElement.videoHeight;
        this.canvasContext.canvas.width = this.videoElement.nativeElement.videoWidth;

        this.canvasContext.drawImage(
           this.videoElement.nativeElement,
           0, 
           0, 
           this.canvasContext.canvas.width, 
           this.canvasContext.canvas.height
           )
           const imageData = this.canvasContext.getImageData(
             0,
             0,
             this.canvasContext.canvas.width,
             this.canvasContext.canvas.height
           )

           const code = jsQR(imageData.data, imageData.width, imageData.height, {
             inversionAttempts: "dontInvert"
           })
           if(code){
             console.log('WE HAS THE CODE!', code);
           }
      }
    requestAnimationFrame(() => this.tick())
  }
}
