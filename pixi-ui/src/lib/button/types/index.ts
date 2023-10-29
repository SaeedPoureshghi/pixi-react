
export enum ButtonTypes {
    primary,
    danger
}

export interface IButton {
    title:string,
    type?:ButtonTypes
}