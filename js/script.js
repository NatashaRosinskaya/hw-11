class Contacts{
    constructor (){
        this.data = [];
    }

    add(data){
        let user = new User (data)
        this.data.push (user);
    }
   /* edit(id, obj) {
        this.data[id].user = obj;
    }*/
    remove(id) { 
        this.data.splice(id, 1)
    }
    get(){
        return this.data
    }
}

class User{
    constructor(obj){
        this.data = obj;         
    }

    edit(obj){
        this.data = obj;
    }

    get(){
        return this.data
    }
}

let contactBooks = new Contacts ()

contactBooks.add({
    id: 1,
    name: 'Maria',
    email: 'mari@gmail.com',
    address: 'Minsk',
    phone: '375256325878',
})

contactBooks.add({
    id: 2,
    name: 'Anna',
    email: 'ann@gmail.com',
    address: 'Moscow',
    phone: '375298526474',
})

contactBooks.add({
    id: 3,
    name: 'Helen',
    email: 'elena@gmail.com',
    address: 'Paris',
    phone: '375336589785',
})

contactBooks.add({
    id: 4,
    name: 'Alex',
    email: 'alex@gmail.com',
    address: 'Moscow',
    phone: '375296858845',
})

contactBooks.remove(2, 1)
console.log(contactBooks)

class ContactsApp extends Contacts{
    constructor (data){
        super(data);
    }
}