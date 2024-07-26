import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule } from 'devextreme-angular';
import { DxNumberBoxModule } from 'devextreme-angular';
import { DxSelectBoxModule } from 'devextreme-angular';
import { DxDateBoxModule } from 'devextreme-angular';
import { DxDataGridModule,DxFileUploaderModule } from 'devextreme-angular';
import { Service, Employee } from '../assets/app.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DxButtonModule,DxTextBoxModule , CommonModule,DxSelectBoxModule,DxDateBoxModule,DxNumberBoxModule, DxDataGridModule,DxFileUploaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Service],
  
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
  
  title = 'newdemoproject';
  employees: Employee[];
  constructor(service: Service) {
    this.employees = service.getEmployees();
  }

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
    console.log('File uploaded:', file.name, 'Size:', file.size, 'bytes');
  }
}
