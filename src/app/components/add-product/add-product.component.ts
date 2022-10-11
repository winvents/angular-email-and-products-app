import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Cathegory } from 'src/app/shared/model/cathegory.model';
import { Product } from 'src/app/shared/model/product.model';
import { CathegoryService } from 'src/app/shared/services/cathegory.service';
import { ProductService } from 'src/app/shared/services/product.service';
import Constants from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  public cathegories: Cathegory[] = [];
  public product!: Product;

  public createProductForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    amountAvailable: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    cathegoryId: new FormControl(''),
  });

  constructor(
    private productService: ProductService,
    private cathegoryService: CathegoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData(): void {
    let resp = this.cathegoryService.getCathegories();
    console.log(resp)
    resp.subscribe(cathegoriesData => this.cathegories = cathegoriesData as Cathegory[])

  }

  createNewProduct() {
    this.router.navigate([Constants.URL_ADD_PRODUCT]);
  }

  saveProduct(): void {
    const dataToBeSaved = { ...this.product, ...this.createProductForm.value };
    this.productService.saveProduct(dataToBeSaved).subscribe({
      next: (resp) => this.onSaveCompleted(resp),
    });
  }

  private onSaveCompleted(savedData: any): void {
    this.router.navigateByUrl(Constants.URL_LIST_PRODUCTS);
  }

}
