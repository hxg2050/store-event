import { EventValue } from ".";

export interface IEventType {
    jump(e: number): void;
    jump2(e: string): void;
}

export declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;


declare type EmitFn<Options, Event extends keyof Options = keyof Options> = UnionToIntersection<{
    [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: Options[key], arg1: (...args: Args) => void) => void : (event: Options[key], arg1: (...args: any[]) => void) => void;
}[Event]>;

// type Util<T> = {
//     [Prop in keyof T]: {
//         key: Prop,
//         value: T[Prop]
//     }
// }

type LL<T> = EmitFn<T>;

let on: LL<IEventType> = function(name: string, callback: any) {

}

// function on<T, U = LL<T>>(...[name, callback]: LL<T>) {
//     console.log(name, callback);
// }


on('jump', () => {

});

type Person = {
    name: string,
    age: number,
}

type Util<T> = {
    [Prop in keyof T]: {
        key: Prop,
        value: T[Prop]
    }
}

type Values<T> = T[keyof T];

type Result = Values<Util<Person>>

let Transform = {
    Event: {
        ADDED: (name: string) => true,
        ADDED2: (name: number) => true,
    }
}

let tmp: LL<typeof Transform.Event> = function() {};
tmp(Transform.Event.ADDED2, (name: number) => {

});