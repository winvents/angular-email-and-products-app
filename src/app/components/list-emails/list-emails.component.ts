import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailList } from 'src/app/shared/model/email-list.model';
import { Email } from 'src/app/shared/model/email.model';
import { EmailService } from 'src/app/shared/services/email.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-emails',
  templateUrl: './list-emails.component.html',
  styleUrls: ['./list-emails.component.scss']
})
export class ListEmailsComponent implements OnInit {

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

  public emailRowData: Email[] = [];
  
  displayedColumns: string[] = [
    'dateSent',
    'emailTo',
    'subject',
    'text'
  ]

  dataSource = new MatTableDataSource<Email>(this.emailRowData);

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  
  constructor(
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getData();
  }

  public getData(){
    let resp = this.emailService.getEmails();
    resp.subscribe(emailData=>this.dataSource.data=emailData as Email[])
    
  }

}
