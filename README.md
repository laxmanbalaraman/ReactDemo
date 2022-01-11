# ReactDemo
This repo contain sample files created during the my React learning process. 

### What is a virtualDOM.

https://www.geeksforgeeks.org/reactjs-virtual-dom/ <br/>

Virtual DOM is a lightweight copy of the actual DOM (a blueprint or virtual representation of the DOM).<br/>
When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes.  This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.<br/>

Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, virtual DOM gets updated first instead of the real DOM.  This entire proces of transforming changes to the real DOM is called Reconciliation. <br/> 



