import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Product } from 'src/app/shared/model/product.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Router } from '@angular/router';
import Constants from 'src/app/shared/utils/constants';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  public productsRowData: Product[] = [];

  displayedColumns: string[] = [
    'name',
    'price',
    'amountAvailable',
    'description'
  ]

  dataSource = new MatTableDataSource<Product>(this.productsRowData);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getData();
  }

  public getData() {
    let resp = this.productService.getProducts();
    console.log(resp)
    resp.subscribe(productData => this.dataSource.data = productData as Product[])
  }

  createNewProduct() {
    this.router.navigate([Constants.URL_ADD_PRODUCT]);
  }
}
