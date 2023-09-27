import { Constants } from "./actions";
import { Task } from "./typeState";

type ConstantsValues = `${Constants}`;

export interface IAction {
    type: ConstantsValues,
    id:number,
    text:string,
    task: Task
}