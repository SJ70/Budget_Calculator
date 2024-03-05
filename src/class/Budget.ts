export interface IBudget {
    title: string,
    cost: number
}

export class Budget implements IBudget {

    private static idValue: number = 0;

    private _title: string;
    private _cost: number;
    private _id: number;

    constructor(title: string, cost: number) {
        this._title = title;
        this._cost = cost;
        this._id = Budget.idValue++;
    }

    get title(): string {
        return this._title;
    }

    get cost(): number {
        return this._cost;
    }

    get id(): number {
        return this._id;
    }

    set title(title: string) {
        this._title = title;
    }

    set cost(cost: number) {
        this._cost = cost;
    }

}