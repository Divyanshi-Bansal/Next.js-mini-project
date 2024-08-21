export function practiceTS(): void{

    let prersonName = "divyanshi";
    // prersonName = 34; //gives error because we can't assign other type value in declared variable.

    prersonName = "second name" //because string can be reassigned 

    //but if we don't initialized the varibale at the time of declaration then we can assign any type of value
    // ANY type: bad practice of code
    let demoVar;
    console.log(demoVar);
    demoVar = 23;
    console.log(demoVar);
    demoVar = "demoVar";
    console.log(demoVar);
    demoVar = true;
    console.log(demoVar);


    let numVar : number = 22;
    console.log(numVar);

    let strNum : string | number = 21
    console.log(strNum)
    strNum = "string number";
    console.log(strNum)
    strNum = 45;
    console.log(strNum)

    // arrays
    let arr1 = [1,2,3]
    arr1.push(4)
    // arr1.push("str") //we can store same type of values in arr which is in the time of declaration
    console.log(arr1);

    let arr2 = [1,2,3,"str", 2.3]
    arr2.push("io");
    arr2.push(67)
    arr2.push(4.5)
    console.log(arr2);

    let arr3 : (string | number) [] = []
    arr3.push("first")
    arr3.push(3)
    arr3.push(1.2)
    arr3.push(6.7)
    console.log(arr3)

    //any type of array
    let arr4 = []
    // or
    let arr5 : any[]
    // arr4 is any type - any type of variable

    //objects

    let user = {
        name:"abhay",
        age:23,
        passed: true
    }
    console.log(user)

    // user.passed = 1; //not good pracice, type should be same
    // console.log(user);


    let user1 : any = {}
    user1["name"] = "bhole";
    user1["age"] = 24
    console.log(user1);

    let user2 : { //declaration
        name: string,
        age: number,
        isAdmin: boolean,
        phone ?: number //?: sign of not required
        nestedObj: object
    }

    // user2.isAdmin = 1; // error

    //wrong way of initialization
    // user2.age = 34; 
    // user2.isAdmin = false;
    // user2.name = "honey";
    user2 = {
        name:"honey",
        age:55,
        isAdmin : true, //you can't miss any value in object, all keys are must if you declare them before in advance.
        nestedObj: {}
    }
    console.log(user2);


    // fucntions are same as in javascript, new ones i'll add

    let arroFunc = () => {
        console.log("normal arrow functions");
    }
    arroFunc();

    function function2(){
        console.log("normal fucntion");
    }
    function2();

    let arrowFunc2 = ():string =>{
        console.log("returned function");
        return "str";
    }
    let arrowFunc3 = ():void =>{
        console.log("returned function");
    }
    let arrowFunc4 = (num: number) =>{
        console.log("returned function");
        return num*2;
    }
    console.log(arrowFunc2());
    arrowFunc3();
    arrowFunc4(3);
    // arrowFunc4("strng"); //error because strictly it only accepts number 

    function functionReturn(){
        console.log("return normsl function");
        return "str";
    }
    console.log(functionReturn());

    // type aliases
    //consider this usertype as a dto now
    type USERTYPE = {
        name:string,
        age: number,
        address ?: string
    }

    let dtoFunc = (num:number, subject: any, user: USERTYPE) =>{
        console.log(num, subject, user.address, user.age, user.name);
    }

    let user3 = {
        name:"demo",
        age:23
    }

    dtoFunc(2,"maths", user3);

    // type in function
    //we only define return type in designing of type function. Then when we use function type we should consider return type .
    //it is useful when we want to specify some functions type before using it in your code in multiple places.

    type myFunc = (a:number, arg1: string) => void
    type myFunc2 = (num: number, str: string) => number

    let fun1 : myFunc = (n,s) =>{
        console.log("complete func1", n, s);
    }
    let fun2 : myFunc2 = (n,s) =>{
        console.log("complete func1", n);
        return n;
    }
    fun1(2,"first");
    fun2(3,"second return");

    //interface - again like dto
    interface IUser {
        name:string,
        age:number,
        phone ?: number
    }

    interface IStudent extends IUser{
        studentId: number,
        address ?:string
    }

    let student1 : IStudent = {
        name:"divya",
        age:23,
        phone:6789643,
        studentId: 1
    }
    console.log("student1: ",student1);

    let student2 = () :IUser =>{
        let user = {
            name:"priyanshi",
            age:20
        }
        return user;
    }

    console.log(student2());

    //generics

    interface school {
        name:string,
        address:string,
        extrainfo: IUser[] | IStudent[] | string //it can be both or one 
    }

    let krishna: school = {
        name:"krishna",
        address:"i don't know",
        extrainfo: [{
            studentId:1,
            name:"krishna",
            age:34
        }]
    }
    console.log("krishna 1: ", krishna);
    let krishna2: school = {
        name:"krishna",
        address:"i don't know",
        extrainfo: "extra info in string"
    }

    console.log("krishna 2 : ", krishna2);

    interface genericEx<T = number>{ 
    //OPTIONAL: by this = number (or any type you mentioned here), considers the default type of T if you won't mentioned any
        name:string,
        age:number,
        extra: T[] | string
    }

    let extraGenericExample : genericEx<number> = {
        name:"example",
        age:23,
        extra: [2.3,23434,453,32]
    }
    console.log("extra generic example: ",extraGenericExample);

    let extraGenericExample1 : genericEx<number> = {
        name:"example",
        age:23,
        extra: "string"
    }
    console.log("extra generic example 1: ",extraGenericExample1);

    interface anotherexofgeneric<T extends school>{ //where T must extend school.
        name:string,
        extra: T[],
        obj: school | string[]
    }

    interface obj2 {
        objname:string,
        objage:number
    }
    let ex2 : anotherexofgeneric<school> = {
        name:"expale",
        // extra: [23,34,45], //in this  case, extra can be of any type, but it must be list of scool 
        extra:[
            {
                name: "School1",
                address: "Address1",
                extrainfo: "Some info" // This could also be an array of IUser[] or IStudent[]
            },
            {
                name: "School2",
                address: "Address2",
                extrainfo: "More info"
            }
        ],
        obj:{
            name:"dfd",
            address:"dfdf",
            extrainfo:"fdfd"
        }
    }
    console.log(ex2);

    //named params

    function namedParaFunction({num, str, age}:{num: number, str: string, age: number}){ //another way of defining types of variables in function
        console.log(num, str, age);
    }
    //this is a named params function, so if we call them  we need to specify the params name whie calling
    namedParaFunction({num:2,str:"string para",age: 3});

    //in javascript, we use ...args in a parameter in functions to accept arguments in a list., here we have ...rest
    function argsInTS(num:number, s:string, ...rest:any[]){
        console.log("first: ", num, " second: ", s);
        rest.forEach((para)=>{
            console.log("another parama: ", para);
        })
    }
    argsInTS(2,"second param", 10,20,"any param", 7.89);

    //type casting: 2 ways: 1. by using "as", 2. by using <>
    let x : unknown = 'hello'; //34
    console.log(x);
    console.log(x as string);
    //both gave same output: hello, in case of number 34 and we typecast as string then still it gives 34.
    console.log((x as string).length);

    let y : number = 34;
    console.log(y);
    console.log(y as unknown as string); // because we can't convert number or any other type to some other type directly.
    //we first need to typecase it into unknown

    console.log(<string>x);
    console.log(<string><unknown>y); //or console.log(<string>(<unknown>y));

    //classes: templates for objects
    class MyClass{
        private name: string;
        private age: number;

        constructor(name: string, age: number){
            this.age = age;
            this.name = name;
        }

        public getName() :string{
            return this.name;
        }
        private nameSum(){
            console.log(this.name);
        }
    }
    const myClass = new MyClass("divya", 23);
    let name = myClass.getName();
    console.log(name);

    let errorMsg;
    let error = errorMsg as unknown as MyClass;
    console.log("error: ",error);

    //interface
    interface schoolInterface{
        getSchoolName() :string;
        name:string;
        age:number;
    }

    class DPS implements schoolInterface{
        name!: string;
        age!: number;
        public getSchoolName(): string {
            return "DPS";
        }
    }
    let dps = new DPS();
    console.log(dps.getSchoolName());

    //keyof: union of poperties, other property of any kind of type os not allowed.
    function exampleOfKeyof(school: schoolInterface, properties: keyof schoolInterface){
        console.log(`example of keyOf: ${properties} of school is ${school[properties]}`);
    }
    let school2: schoolInterface = {
        name:"abc",
        age:23,
        getSchoolName: () => {
            return name;
        },
    }
    exampleOfKeyof(school2, "age"); //example of keyOf: age of school is 23
    // exampleOfKeyof(school2, "anyrandom"); //example of keyOf: age of school is undefined

    type schoolType = {
        getSchoolName() :string;
        name:string;
        age:number;
    }

    type anotherExOfKeyOf = { //keyof can be used only with interface and type , it gives error if anotherExOfKeyof is let type and not either
        // type or interface
        name:"abvbc", //doesn't matter what value is initialized, it won't take this value, in type or interface, it only consider the type of variable.
        age:23,
        extra: keyof schoolType | string
    }
    console.log(<anotherExOfKeyOf><unknown>school2);

    // ?? operator , similar like &&
    function printMileage(mileage: number | null | undefined) {
        console.log(`Mileage: ${mileage ?? 'Not Available'}`);
    }
    
    printMileage(null); // Prints 'Mileage: Not Available'
    printMileage(0); // Prints 'Mileage: 0'

    //null assertion : !:, like to make a variable optional we use ?: like: let var1 ?: number;
    // !: 
    function getValue(): string | undefined {
        // return undefined; //error while consoling
        // return 'hello'; //5
        return ''; //0
    }
    let value = getValue();
    console.log('value length: ' + value!.length);
    //in this code, value! aserts or ensures that the value is not null or undefined 
    //alternative soln:
    console.log("alternate soln of value: ", value != undefined && value != null ? value.length : null);

    console.log("practice typescript");
}
