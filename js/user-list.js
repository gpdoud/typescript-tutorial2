"use strict";
class User {
    constructor(id, username, name, phone, email) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
let users = [
    new User(10, "sa", "SysAdm", "911", "911@sa.com"),
    new User(20, "aa", "Dbl A", "811", "811@sa.com"),
    new User(30, "bb", "Bee", "711", "711@sa.com"),
    new User(40, "cc", "Sea", "611", "611@sa.com"),
    new User(50, "dd", "Duh", "511", "511@sa.com")
];
$().ready(() => {
    let tbl = $("#users");
    for (let u of users) {
        let tr = $("<tr></tr>");
        tr.append(`<td>${u.id}</td>`);
        tr.append(`<td>${u.username}</td>`);
        tr.append(`<td>${u.name}</td>`);
        tr.append(`<td>${u.phone}</td>`);
        tr.append(`<td>${u.email}</td>`);
        tbl.append(tr);
    }
});
