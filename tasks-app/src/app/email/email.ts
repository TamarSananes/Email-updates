import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService } from '../service/EmailService';


@Component({
  selector: 'app-email',
  imports: [FormsModule],
  templateUrl: './email.html',
  styleUrl: './email.scss',
})
export class Email {

  content = '';
  carrier = '';
  type = '';
  addressee = '';

  printMessage(content: string, carrier: string, type: string, addressee: string): void {
    alert("התוכן בתהליך שליחה ")
    console.log('זו הודעת הדפסה מהפונקציה!');
    console.log({ content, carrier, type, addressee });
  }

  
  constructor(private emailService: EmailService) {}

  sendEmail(): void {
    const emailData = {
      subject: this.carrier,
      recipient: this.addressee,
      type: this.type,
      body: this.content
    };

    this.emailService.sendEmail(emailData).subscribe({
      next: (response) => console.log('מייל נשלח בהצלחה!', response),
      error: (err) => console.error('שגיאה בשליחת המייל:', err)
    });
  }
}




