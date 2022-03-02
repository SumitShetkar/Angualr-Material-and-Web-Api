import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList =["Brand new","Second Hand","Refubrished"]
  productform : FormGroup;
  actionbtn:string = "Save";

  constructor(
    private formbuilder:FormBuilder,
    private api:ApiService,
    private dilogref : MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)public editData:any) { }

  ngOnInit() {
    this.productform = this.formbuilder.group({
      ProductName : ['',Validators.required],
      Category : ['',Validators.required],
      Freshness : ['',Validators.required],
      Price : ['',Validators.required],
      Comments : ['',Validators.required],
      Date : ['',Validators.required],
    })
  
    if(this.editData){
      this.actionbtn="Update";
      this.productform.controls['ProductName'].setValue(this.editData.ProductName);
      this.productform.controls['Category'].setValue(this.editData.Category);
      this.productform.controls['Freshness'].setValue(this.editData.Freshness);
      this.productform.controls['Price'].setValue(this.editData.Price);
      this.productform.controls['Comments'].setValue(this.editData.Comments);
      this.productform.controls['Date'].setValue(this.editData.Date);
    }
  }

  

  addproduct()
  {
    if(!this.editData)
    {
      if(this.productform.valid)
      {
        this.api.add(this.productform.value).subscribe({
          next:(res)=>
          {
            alert("Product added successfully")
            this.productform.reset(),
            this.dilogref.close('save')
         },
          error:()=>{alert("error while adding the product")}
        })
      }
    }
    else{
      this.updateProduct()
    }
  }

  updateProduct(){
    this.api.update(this.editData.Id,this.productform.value).
    subscribe({
      next:(res) => {alert("product updated successfully");
        this.productform.reset();
        this.dilogref.close('updated');
     },
     error:()=>{
       alert("error while updating the record")}
    })
  }

}
