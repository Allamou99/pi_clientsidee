export interface user{
    _id:string,
    username:string,
    lastname:string,
    firstname:string,
    inNeed:boolean,
    isDoctor:boolean,
    telNumber:string,
    mail:string,
}


export interface location{
    lat:any;
    long:any;
}