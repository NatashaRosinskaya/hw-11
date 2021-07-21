class Contacts{
    constructor (){
        this.data = [];
    }

    add(data){
        let user = new User (data)
        this.data.push (user);
    }
    edit(id, obj) {
        let user = this.data.find(function(item) {
          return item.get().id === id
        });
        user.edit(obj);
    }
    remove(id) {
        this.data = this.data.filter(function(item) {
            return item.get().id !== id
        });
    }
    get(){
        return this.data
    }
}

class User{
    constructor(obj){
        this.data = obj;         
    }

    edit(data){
        for (let key in data){
            if (this.data[key] != undefined) this.data[key] = data[key];
        }
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

contactBooks.edit(4, {name: 'Alexandr'})

contactBooks.remove(2)
console.log(contactBooks)

class ContactsApp extends Contacts{
    constructor (){
        super();

        this.init();
    }

    init(){
        let contactContainer = document.createElement('div')
        contactContainer.classList.add('container')
        document.body.appendChild(contactContainer)

        let contactForm = document.createElement('div');
        contactForm.classList.add ('contact__form');
        contactContainer.appendChild(contactForm);

        this.contactsList = document.createElement('div');
        this.contactsList.classList.add ('contact__list');
        contactContainer.appendChild(this.contactsList);

        let contactTextarea = document.createElement('textarea');
        contactTextarea.setAttribute ('name', 'contact_add');
        contactForm.appendChild(contactTextarea);

        /*let contactButton = document.createElement('button');
        contactButton.setAttribute('id', 'btn_send');
        contactForm.appendChild(contactButton);
        contactButton.innerHTML='Добавить контакт';

          let buttonSend = document.querySelector('#btn_send')
            buttonSend.addEventListener('click', event=>{
                    this.sendBtn(event)    
                                 
            }) */
       
        contactTextarea.addEventListener('keyup', event => {
            this.onAdd(event);
    })
}   
    updateContact(){
        this.contactsList.innerHTML = '';
        this.data.forEach(user => {
            let contactElem = document.createElement('div');
            contactElem.classList.add('contacts__item')
            contactElem.dataset.id = user.data.id;
            contactElem.innerHTML = user.data.contactBooks;
            this.contactsList.appendChild(contactElem)
        })
    }


        onAdd(event){
        if (event.ctrlKey != true || event.key !="Enter") return;
        if (event.target.value.length == 0) return

        this.add({
        contactBooks: event.target.value
        })
   
        this.updateContact()
        event.target.value =''
        }

        onEdit(event){

        }
    /*sendBtn(event){

    this.add({
        contactsBook: event.target.value
    })
   
    this.updateContact()
    event.target.value =''
}*/
}

new ContactsApp()