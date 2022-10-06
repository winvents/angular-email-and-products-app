import { Component, OnInit } from '@angular/core';
import { EmailList } from 'src/app/shared/model/email-list.model';
import { Email } from 'src/app/shared/model/email.model';
import { EmailService } from 'src/app/shared/services/email.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-list-emails',
  templateUrl: './list-emails.component.html',
  styleUrls: ['./list-emails.component.scss']
})
export class ListEmailsComponent implements OnInit {

  public emailRowData: Email[] = [];
  public emailColumnDefs: ColDef[] = [
    {field: 'emailId', headerName: 'id'},
    {field: 'emailFrom', headerName: 'from'},
    {field: 'emailTo', headerName: 'to'},
    {field: 'emailStatus', headerName: 'status'},
    {field: 'subject', headerName: 'subject'},
    {field: 'text', headerName: 'text'},
    {field: 'dateSent', headerName: 'date'},
  ]

  public emailDefaultColDef = {
    sortable: true,
    filter: true,
    minWidth: 90,
    width: 90,
    flex: 1,
    autoHeight: true,
    resizable: true,
    cellStyle: { 'white-space': 'normal' }
  };

  constructor(
    private emailService: EmailService,
  ) { }

  private emailServiceSubscription: any;

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.emailServiceSubscription = this.emailService.getEmails().subscribe({
      next: (data: EmailList) => {
        this.emailRowData = data.emails;
        console.log(data);
      },
      error: () => {
        alert('Error retrieving email data.');
      }
    })
  }

  ngOnDestroy(): void {
    if (this.emailServiceSubscription)
      this.emailServiceSubscription.unsubscribe();
  }

}
