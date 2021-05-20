export class Post {
    userFullName: string;
    date: Date;
    message: string;
    userImg: string;

    constructor(userFullName : string, date: Date, message : string, userImg: string){

        this.userFullName = userFullName;
        this.date = date;
        this.message = message;
        this.userImg = userImg;

    }
}
