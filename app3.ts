// Type guards and Typescript Utlity Types
// Using typeof and instanceof
// partial, Required, Readonly, Pick, Omit, Exclude, Extract, NonNullable, Parameters, ConstructorParameters, ReturnType, InstanceType, ThisParameter  

function abcd(arg:number|string){
    if(typeof arg ==="string"){
        console.log(arg.toUpperCase());
        return "number";
    }
    else if(typeof arg ==="number"){
        console.log(arg.toFixed(2));
        return "string";
    }
    throw new Error("Invalid Argument");
}

abcd(23);
abcd("ak");


// type of instance of

class TvKaRemote{
   swichTvOff(){
         console.log("Tv is off");
    }
}

class CarKaRemote{
    swichCarOff(){
        console.log("Car is off");
    }
}

const tv=new TvKaRemote();
const car=new CarKaRemote();

function switchOffKaro(device: TvKaRemote | CarKaRemote){
    if(device instanceof TvKaRemote){
        device.swichTvOff();
    }
    else if(device instanceof CarKaRemote){
        device.swichCarOff();
    }
}