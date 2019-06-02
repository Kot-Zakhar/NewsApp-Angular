export class Source {
    id = '';
    name = '';

    constructor(data?: any){
        if (data){
            this.id = data.id ? data.id : this.id ;
            this.name = data.name ? data.name : this.name;
        }
    }
}
