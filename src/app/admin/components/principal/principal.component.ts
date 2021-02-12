import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IImage, IMAGE_FORMATS } from 'src/app/shared/models/general.models';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  fileName: FormControl;
  url: string = '';
  image: IImage = {
    extension: '',
    url: ''
  };

  constructor(
    private adminSrv: AdminService
  ) {
    this.fileName = new FormControl('', [
      Validators.required
    ]);
  }

  ngOnInit(): void { }


  onSelectFile(event: any) { // called each time file input changes
    console.log('event', event)
    if (event.target.files && event.target.files[0]) {
      const extension = event.target.files[0].name.split('.').pop().toLowerCase();
      // console.log('extension', extension)
      if (!IMAGE_FORMATS.includes(extension)) {
        console.log('no existe')
        return ;
      }
      this.image.extension = extension;
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.image.url = event.target.result as string;
        console.log('this.image', this.image)
      }
    }
  }

  handleSendImage() {
    console.log('this.image', this.image);
    const fileName = this.fileName.value;
    const obj = {
      extension : this.image.extension,
      dataFile  : this.image.url,
      fileName
    };
    console.log('obj', obj);
    // return ;
    this.adminSrv.uploadImage(obj).subscribe(res => {
      console.log('res', res);
    }, err => {
      console.log('err', err);
    })
  }
}
