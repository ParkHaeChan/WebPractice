import { plainToClass, plainToInstance } from 'class-transformer';

class myPackage {
    name: string;
    version: string;
    description: string;

    constructor(name:string, version:string, description: string)
    {
        this.name = name;
        this.version = version;
        this.description = description;
    }
}

let packageJson = {
    name: "chromewebserver",
    version: "1.0.0",
    description: "korean language not working",
};

let mypackage = plainToInstance(myPackage, packageJson);

document.querySelector("#root").innerHTML = mypackage.description + " " + mypackage.name + " " + mypackage.version;