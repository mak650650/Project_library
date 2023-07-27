import { createBook } from "./app.js";
import { library } from "./data.js";

export const UTIL= {
    uploadData(){
        const elements = document.getElementsByClassName("element");
        
        const length = library.length;
        for (let i = 0; i < length; i++) {
                elements[i].children[0].children[0].textContent = `${elements[i].children[0].children[0].textContent} ${library[i].title}`;
    
                elements[i].children[0].children[1].textContent = `${elements[i].children[0].children[1].textContent} ${library[i].author}`;
            
                elements[i].children[0].children[2].textContent = `${elements[i].children[0].children[2].textContent} ${library[i].numberOfPages}`;         
        
        }
    },
    
    callToOpen(addButton,form_container ,main) {// THis is working fine!
        return new Promise(function(resolve,reject){
            addButton.addEventListener("click",function(){
                
                form_container.style.visibility = 'visible';
                main.style.filter = 'blur(15px) \n sepia(0.9)';
            
                // RESOLVE AND REJECT
                resolve("ok!");
                reject("Unable to open!");
            })   
        });        
    },
    getDatafromform(submit_button,title ,author ,numberOfPages){ // This is working fine too!
        return new Promise(function(resolve,reject){
            submit_button.addEventListener("click",function(){  

                title = document.getElementsByTagName("input")[0].value;
                author = document.getElementsByTagName("input")[1].value;
                numberOfPages = Number(document.getElementsByTagName("input")[2].value);
                const temp_arr = [title ,author ,numberOfPages];      
                // RESOLVE AND REJECT
                event.preventDefault(); 
                resolve(temp_arr);
                reject("Wrong input!");
              
            });
            
        });  
    },
    callTocreate(title,author,numberOfPages ,form_container ,main ,elements){
        return new Promise(function(resolve,reject){
                
                // Updating Javascript
                const book = new createBook(title,author,numberOfPages);
                FileSystemWritableFileStream
                // Updating HTML
                const length  = elements.length;
                const outerDiv = document.createElement('div');
                outerDiv.classList.add(`element${length + 1}`)
                outerDiv.classList.add('element');
                outerDiv.textContent = `#0${length + 1}`;

                    const innerdiv =document.createElement('div');
                    innerdiv.classList.add('details')

                        const p1 = document.createElement('p');
                        p1.textContent = `Title: ${title}`;

                        const p2 = document.createElement('p');
                        p2.textContent = `Author: ${author}`;

                        const p3 = document.createElement('p');
                        p3.textContent = `Number of pages: ${numberOfPages}`;

                        const p4 = document.createElement('p');
                        p4.textContent = 'Status:';

                            const select = document.createElement('select');
                            select.classList.add('Status');

                                const option1 = document.createElement('option');
                                option1.textContent = 'Reading';


                                const option2 = document.createElement('option');
                                option2.textContent = 'Completed';


                                const option3 = document.createElement('option');
                                option3.textContent = 'Ongoing';

                            select.appendChild(option1);
                            select.appendChild(option2);
                            select.appendChild(option3);
                            
                            
                            p4.appendChild(select);

                    const button = document.createElement('button');
                    button.classList.add('remove');
                    button.textContent = 'X';

                    innerdiv.appendChild(p1);
                    innerdiv.appendChild(p2);
                    innerdiv.appendChild(p3);
                    innerdiv.appendChild(p4);

                outerDiv.appendChild(innerdiv);
                outerDiv.appendChild(button);
                
                const container = document.getElementById("container");
                container.appendChild(outerDiv);

                // updating html ends

                // CSS CHANGES TO THE NEW HTML
                const newbookHtml = document.getElementsByClassName("elements")[length+1];
                // newbookHtml.style.grid-are

                // RESOLVE AND REJECT
                form_container.style.visibility = "hidden";
                main.style.filter = 'blur(0px) \n sepia(0)';
                
                resolve(book);
                reject("Something breaks");   
                
            });
       
    },
    callToRemove(removeButtons ,elements){
        let length = elements.length;
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            removeButtons[i].addEventListener("click" ,function(){
                element.remove();   
               
            })
        }
        
    },
    
};
    