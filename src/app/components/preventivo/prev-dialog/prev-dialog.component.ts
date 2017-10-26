import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { MatDialogRef } from '@angular/material';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-prev-dialog',
  templateUrl: './prev-dialog.component.html',
  styleUrls: ['./prev-dialog.component.css']
})
export class PrevDialogComponent implements OnInit {

  nominativo: string;
  email: string;
  telefono: string;
  citta: string;
  azienda: string;
  sito: string;
  note: string;

  constructor(private dialogRef: MatDialogRef<PrevDialogComponent>, private http: Http) { }

  ngOnInit() { }

  onSubmitSend () {

    if (this.nominativo && this.email && this.telefono && this.citta) {
      const info = {
        nome: this.nominativo,
        email: this.email,
        telefono: this.telefono,
        citta: this.citta,
        azienda: this.azienda,
        sito: this.sito,
        note: this.note
      };

      const email = {
        to: 'michele@daudr.me',
        from: this.email,
        sub: 'Preventivo sito - ' + this.nominativo,
        content: 'Nominativo: ' + this.nominativo + '\n'
                + 'Telefono: ' + this.telefono + '\n'
                + 'Città: ' + this.citta + '\n'
                + 'Azienda: ' + this.azienda + '\n'
                + 'Sito: ' + this.sito + '\n'
                + this.note
      }

      this.dialogRef.close();

      return this.http.post("https://secret-crag-18429.herokuapp.com/api/sendemail", email)
  			.toPromise()
  			.then(response => {
          let res = response.json();
          if (res.data.success == true) {
            alert('email inviata');
          } else {
            alert('Errore: Email non inviata');
          }
        })
  			.catch(this.handleError);
    } else {
      alert("Inserisci tutti i campi obbligatori");
    }
  }

  private handleError(error: any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
  }

}
