export type State = {
    id: number,
    text: string
}

export interface IState {
    tasks: State[] | [] 
}