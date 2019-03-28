export class Episodes {
  id: number;
  name: string;
  number: number;
  airdate: string;

  constructor(args?){
    this.id = args.id;
    this.name = args.name;
    this.number = args.number;
    this.airdate = args.airdate;
  }

}
