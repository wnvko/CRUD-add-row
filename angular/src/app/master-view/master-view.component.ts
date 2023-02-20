import { Component, OnInit } from '@angular/core';
import { IGridEditDoneEventArgs, IRowDataEventArgs } from '@infragistics/igniteui-angular';
import { first } from 'rxjs';
import { NorthWindCRUDService } from '../services/north-wind-crud.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public northWindCRUDCategory: any = null;

  constructor(
    private northWindCRUDService: NorthWindCRUDService,
  ) { }

  ngOnInit() {
    this.northWindCRUDService.getCategory().pipe(first()).subscribe(data => this.northWindCRUDCategory = data);
  }

  public categoryRowAdded(args: IRowDataEventArgs) {
    this.northWindCRUDService.postCategory(args.data).pipe(first()).subscribe({
      next:(data) => {
        this.northWindCRUDCategory[this.northWindCRUDCategory.length - 1] = data;
        this.northWindCRUDCategory = [...this.northWindCRUDCategory];
          },
      error: (err) => {
        // TODO: handle errors here
      }
    });
  }

  public categoryRowEditDone(args: IGridEditDoneEventArgs) {
    if (args.isAddRow == false) {
      this.northWindCRUDService.putCategory(args.rowData).pipe(first()).subscribe();
    }
  }

  public categoryRowDeleted(args: IRowDataEventArgs) {
    this.northWindCRUDService.deleteCategory(args.data.categoryId).pipe(first()).subscribe();
  }

  public addPredefinedRow() {
    const newItem = {
      name: 'New Item',
      description: `Created at ${new Date().toDateString()}`
    };
    this.northWindCRUDService.postCategory(newItem).pipe(first()).subscribe();
  }
}
