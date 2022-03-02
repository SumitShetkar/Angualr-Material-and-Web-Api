import {Component, OnInit,ViewChild} from '@angular/core';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogComponent} from './dialog/dialog.component';
import {ApiService} from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { GenericserviceService } from './services/genericservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MaterialPractise';
  displayedColumns: string[] = ['ProductName', 'Category', 'Date', 'Freshness','Price','Comments','action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator,{ static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort,{ static: false }) sort!: MatSort;

  constructor(private dialog : MatDialog,
    private api:ApiService)
  {

  }
  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val =>{
      if(val === 'save')
      {
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    this.api.getAll().subscribe({
      next:(res) =>
      {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error:()=> alert("error while fetching the records") 
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editProduct(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val =>{
      if(val === 'updated')
      {
        this.getAllProducts();
      }
    })
  }

  deleteProduct(id:number)
  {
    this.api.delete(id).subscribe({
      next:(res)=>{alert("successfully deleted"),
      this.getAllProducts()},
      error:()=>{alert("error while deleting the record")}
    })
  }
}
