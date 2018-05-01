export class Recipe {
  public done: boolean = false;
  constructor(public name: string, public ingredients: Array<string>, public directions: string, public rating: number){}
}
