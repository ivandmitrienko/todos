import { Constants } from "./actions";

type ConstantsValues = `${Constants}`;

export interface IAction {
    type: ConstantsValues,
    id:number,
    text:string
}