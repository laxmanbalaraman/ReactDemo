const jobs = [
    {id: 1, isActive: true},
    {id: 1, isActive: true},
    {id: 1, isActive: false}
];

const activeJobs = jobs.filter(jobs =>  !jobs.isActive);
console.log(activeJobs);


// this in arrow function

// arrow functions that

/*
const demo = {
    display(){
        setTimeout(function(){
            console.log(this);
        },1000);
    }
};
*/

const demo = {
    display(){
        setTimeout(() => {
            console.log(this);
        },1000);
    }
};

// arrow function dont rebind the this function 
// else it inherits this in the constext in which code is defined
demo.display()