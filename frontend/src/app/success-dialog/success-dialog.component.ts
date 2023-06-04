import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent {

  constructor (public dilogRef: MatDialogRef<SuccessDialogComponent>){}

  ngOnInit(): void{
  }

  closeDialog():void{
    this.dilogRef.close();
  }
}
