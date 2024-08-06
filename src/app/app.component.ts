import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild,TemplateRef,NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule, DxCheckBoxModule, DxMenuModule, DxPopupModule, DxValidatorModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxNumberBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxDataGridModule,DxFileUploaderModule,DxDropDownBoxModule, DxListModule,DxToastModule,DxRadioGroupModule   } from 'devextreme-angular';
import { Service, Employee } from '../assets/app.service';
// import { Item } from 'devextreme/ui/accordion';
import { dxItem } from 'devextreme/ui/widget/ui.widget';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DxButtonModule,DxTextBoxModule , CommonModule,DxSelectBoxModule,DxDateBoxModule,DxNumberBoxModule, DxDataGridModule,DxFileUploaderModule,DxDropDownBoxModule,DxListModule,DxMenuModule,DxToastModule,DxRadioGroupModule,DxCheckBoxModule,DxValidatorModule,DxPopupModule,CommonModule  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Service],
  
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  isPopupVisible=false;
  title = 'newdemoproject';
  employees: Employee[];
  constructor(service: Service) {
    this.employees = service.getEmployees();
  }

 item:string[] = ['Product-1','Product-2','Product-3','Product-4']
 model:string[] = ['Model-1','Model-2','Model-3','Model-4']
 selecteditem:string='';
 modelItem:string='';

 oniitemclick(event:any){
  this.selecteditem=event.itemData;
  this.isPopupVisible=false;
 }
 onClickModel(event:any){
  this.modelItem=event.modelData;
  this.isPopupVisible=false;
 }
  togglePopup(): void {
    this.isPopupVisible=true;
}


  // valid form code
  mobileNumberValue!: number;
// valid form code
  isVisible = false;

  counter: number = 0;

  increment() {
    this.counter++;
  this.isVisible = true;
  }
  decrement() {
    if(this.counter <= 0){
      alert("the values should be greater then 0");
      this.counter = 0;
    }
    else{
      this.counter--;
    }

  }
   
  gender = ["Low", "Normal", "Urgent", "High"]
  // increment(event: MouseEvent) {
  //   console.log('Increment button clicked');
  // }
  fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];

  data: any[] = [
    { ID: 1, chargeCode: 'DISC', price: 'Discount', amount: 0 },
    { ID: 2, chargeCode: 'IGST', price: 'IGST', amount: 56665 },
  ];

  // document table code
  @ViewChild('fileUploadCellTemplate', { static: true }) fileUploadCellTemplate!: TemplateRef<any>;

  fileData: any[] = [
    { ID: 1, documentname: 'Doc_1', fileSize: '' },
    { ID: 2, documentname: 'Doc_2', fileSize: '' },
  ];

  onFileUploaded(e: any, rowData: any) {
    const file = e.file;
    rowData.fileName = file.name;
    rowData.fileSize = (file.size / 1024).toFixed(2); // Convert bytes to KB
    console.log('File uploaded:', file.name, 'Size:', file.size, 'bytes');}

}