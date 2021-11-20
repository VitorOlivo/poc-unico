import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  AfterViewInit,
} from '@angular/core';
import * as acessoWebFrame from 'unico-webframe';

@Component({
  selector: 'webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss'],
})
export class WebcamComponent implements AfterViewInit {
  @Output() updatePicture: EventEmitter<String> = new EventEmitter();
  @Output() errorEvent: EventEmitter<any> = new EventEmitter();

  public image;

  private camConfig = {
    TYPE: 2,
  };

  private camLayout = {
    silhouette: {
      primaryColor: '#0bbd26',
      secondaryColor: '#bd0b0b',
      neutralColor: '#fff',
    },
    buttonCapture: {
      backgroundColor: '#2980ff',
      iconColor: '#fff',
    },
    popupLoadingHtml:
      '<div ref="loader" class="loader loader--show" style="position: relative !important"><div class="loader__spin">&nbsp;</div></div>',
    boxMessage: {
      backgroundColor: '#2980ff',
      fontColor: '#fff',
    },
    boxDocument: {
      backgroundColor: '#2980ff',
      fontColor: '#fff',
    },
  };

  constructor() {}

  ngAfterViewInit(): void {
    this.startCam();
  }

  private startCam(): void {
    const callback = {
      on: {
        success: (obj) => {
          this.image = obj.base64;
          this.updatePicture.emit(obj.base64);
        },
        error: (error) => this.errorEvent.emit(error),
        support: (error) => console.log(error),
      },
    };

    acessoWebFrame.webFrameModel
      .loadModelsCameraInteligence('./assets/models')
      .then(() => {
        acessoWebFrame.initCamera(this.camConfig, callback, this.camLayout);
      })
      .catch((error) => this.errorEvent.emit(error));
  }
}
