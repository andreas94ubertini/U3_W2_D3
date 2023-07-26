export class Post {
  constructor(
    public id:number,
    public body: string,
    public title: string,
    public type : string,
    public active: boolean
  ){}
}
