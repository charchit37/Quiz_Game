export class History {

    gameNumber : string;
    name : string;
    que1 : string;
    ans1: string;
    que2 : string;
    ans2: string;
    currentDate: string;



    constructor(gameNumber : string,name: string , que1: string,ans1 : string,que2 : string,ans2: string,currentDate: string)
    {

        this.gameNumber = gameNumber;
        this.name = name;

        this.que1 = que1;
        this.ans1 = ans1;

        this.que2 = que2;
        this.ans2 = ans2;

        this.currentDate = currentDate;

    }
}
