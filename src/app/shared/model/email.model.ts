export class Email {
    id!: string;
    emailFrom!: string;
    emailTo!: string;
    subject!: string;
    text!: string;
    dateSent!: string;

    public constructor(email?: Partial<Email>) {
        Object.assign(this, email);
    }
}
