import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ProductService } from './services/product.service';
import { ProductsComponent } from './products/products.component';
import { NotificationService } from './notification.service';

const URL_JSON = 'http://localhost:8080/products/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  file: any;

  public jsonUploader: FileUploader = new FileUploader({
    url: URL_JSON,
    itemAlias: 'json',
    allowedMimeType: ['application/json']
  });

  constructor(private productService: ProductService, private notifyService : NotificationService) {}

  ngOnInit() {
    this.jsonUploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.jsonUploader.onCompleteItem = (item: any, status: any) => {
      this.notifyService.showInfo("Os dados foram enviados!", "Atenção");
      this.productService.enviouArquivoJson.next();

    };
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.loadFile();
  }

  loadFile() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (this.isJsonString(fileReader.result)) {
        this.jsonUploader.uploadAll();
      } else {
        this.notifyService.showError("Arquivo inválido!", "Erro");
      }
    };

    fileReader.readAsText(this.file);
  }

  receivedText(e) {
    let lines = e.target.result;
    var newArr = JSON.parse(lines);
  }

  isJsonString(str) {
    try {
      var json = JSON.parse(str);
      return typeof json === 'object';
    } catch (e) {
      return false;
    }
  }
}
