class User {
    id: number;
    name: string;
    active: boolean;

    constructor(id: number, name: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.active = active;
    }

    print(): void {
        console.log(this.id, this.name, this.active);
    }
}

let users: User[] = [];
let fred = new User(1, "Fred", true);
users.push(fred);
let brytt = new User(2, "Brytt", true);
users.push(brytt);
let joelle = new User(3, "Joelle", false);
users.push(joelle);

for(let user of users) {
    user.print();
}
console.log("All done...XXX");