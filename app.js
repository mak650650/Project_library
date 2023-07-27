import { library } from "./data.js";
import { UTIL } from "./utility.js"
const addButton = document.getElementsByClassName("add")[0];
let removeButtons = document.getElementsByClassName("remove");
let element = document.getElementsByClassName("element");
const main = document.getElementsByTagName("main")[0];
const form_container = document.getElementById("form");
let title = "";
let author = "";
let numberOfPages = -1;
const submit_button = document.getElementsByClassName("form-submit-button")[0].children[0];
let book;
export class createBook{
    constructor(title,author,numberOfPages){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
}
}  
const APP ={
    init(){
        UTIL.uploadData(); // Updating data

        // 
        UTIL.callToOpen(addButton ,form_container ,main).then((res)=>{
            console.log(res);
            UTIL.getDatafromform(submit_button ,title ,author ,numberOfPages).then((temp_arr)=>{
                console.log(temp_arr);
                title = temp_arr[0];
                author = temp_arr[1];
                numberOfPages = temp_arr[2];
                UTIL.callTocreate(title,author,numberOfPages ,form_container,main ,element).then((res)=>{
                    // alert(res);
                    book = res;
                    console.log(book);
                    alert("Book added")
                    console.log(library)
                    UTIL.callToRemove(removeButtons ,element);
                    
                },(err)=>{
                    console.log(err);
                    alert(err);
                });
            },(err)=>{
                console.log(err);
                alert(err);
            });
        },(err)=>{
            console.log(err);
            alert(err);
        });
        // Adding a new book
        UTIL.callToRemove(removeButtons ,element);
    }
}
window.addEventListener("DOMContentLoaded",APP.init);









