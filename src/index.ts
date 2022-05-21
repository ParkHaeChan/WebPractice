import 'reflect-metadata';
import { instanceToPlain, plainToInstance, Type } from 'class-transformer';


class myPackage {
    name: string;
    version: string;
    description: string;
    @Type(()=> myPackage)
    another: myPackage;

    constructor(name:string, version:string, description:string)
    {
        this.name = name;
        this.version = version;
        this.description = description;
    }
}

let mpackage = new myPackage(
    "chromewebserver",
    "1.0.0",
    "korean language not working");
    mpackage.another = new myPackage("firefox", "1.2.3", "fire~~");

// 타입 제거 (JS의 JSON.stringify 하기 any 타입 상태로 변환해 주어야 함)
let jsonObject = instanceToPlain(mpackage);

// 직렬화 (Type: string인 상태)
let jsonString = JSON.stringify(mpackage);

// 역직렬화 (Type: any인 상태)
jsonObject = JSON.parse(jsonString);


// 형변환: any --> myPackage
let mypackage = plainToInstance(myPackage, jsonObject);

document.querySelector("#root").innerHTML = mypackage.description + " " + mypackage.name + " " + mypackage.version;
document.querySelector("#root").innerHTML += "\n" + mypackage.another.description + " " + mypackage.another.name + " " + mypackage.another.version;