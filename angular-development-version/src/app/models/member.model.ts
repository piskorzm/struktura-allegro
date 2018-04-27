export class Member {
  public firstName: string;
  public surname: string;
  public position: string;
  public email: string;
  public joined: number;
  public about: string;
  public image: string;

  constructor(firstName: string, surname: string, position: string, email: string, joined: number, about: string, image: string) {
    this.firstName = firstName;
    this.surname = surname;
    this.position = position;
    this.email = email;
    this.joined = joined;
    this.about = about;
    this.image = image;
  }
}
