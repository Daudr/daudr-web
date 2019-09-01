import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-prev-dialog',
  templateUrl: './prev-dialog.component.html',
  styleUrls: ['./prev-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrevDialogComponent  {

  nominativo: string;
  email: string;
  telefono: string;
  citta: string;
  azienda: string;
  sito: string;
  note: string;

  constructor(private dialogRef: MatDialogRef<PrevDialogComponent>, private http: HttpClient) { }

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
        content: 'Nominativo: ' + this.nominativo + '\n\n'
                + 'Telefono: ' + this.telefono + '\n\n'
                + 'Città: ' + this.citta + '\n\n'
                + 'Azienda: ' + this.azienda + '\n\n'
                + 'Sito: ' + this.sito + '\n\n'
                + this.note
      };

      this.dialogRef.close();

      this.http.post('https://secret-crag-18429.herokuapp.com/api/sendemail', email)
        .subscribe( response => {
          const success = response['success'];

          if (success) {
            alert('email inviata');
          } else {
            alert('Errore: Email non inviata');
          }
        },
        err => this.handleError(err));
    } else {
      alert('Inserisci tutti i campi obbligatori');
    }
  }

  private handleError(error: any) {
      const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
  }

}
