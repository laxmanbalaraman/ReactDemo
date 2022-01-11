/* if this is inside:
    method -> object
    standalone (or) regular function -> global (window, global)
*/ 

const profile = { 
    name: 'John Doe',
    show(){
    console.log(this);
    }
};

//this.show();
profile.show();

const show1 = profile.show.bind(profile);
show1()
