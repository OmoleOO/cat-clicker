

(function(){
    
    let numberOfClicks = 0;
    const clicksDisplay = $("#cat-clicks");
    const menu = $("aside");
    const catName = $("#cat-name");
    
    // cats model
    let cats = [
        new Cat("Stewie", "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426"),
        new Cat("Chewie", "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496"),
        new Cat("Phlem", "https://images.unsplash.com/photo-1511717004695-7862a87f4b3d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a6e1c6054d1ce17a77cf8e0c47b4d96b&auto=format&fit=crop&w=328&q=80"),
        new Cat("Stewie and Pim", "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454"),
        new Cat("Groot", "https://images.unsplash.com/photo-1518064711538-4e27e702c706?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d27c0369f194434f87a058060024cf0d&auto=format&fit=crop&w=334&q=80")
    ];
   
    
    // Similar to JQuery's document.ready function
     window.addEventListener('DOMContentLoaded', function(){
         catList(cats);
         for (let link of $$(".meow")){
             link.addEventListener("click", (function(){
                 let cat = findCat(link.innerHTML, cats);

                return function(){
                    removePlaceholder();
                    showCatImage(cat);
                    catClickListener(cat);
                }
            })(cats, link, clicksDisplay), false);
         }  
         
         

         // Close menu drawer
         $("#drawer").addEventListener("click", function(){
             menu.style.left = "-1000px";
         });

         // Open menu drawer
          $("#opener").addEventListener("click", function(){
             menu.style.left = "";
         });

         // Click event added to placeholder to open cats menu
          $(".placeholder p").addEventListener("click", function(){
              // check if drawer is closed
             if(menu.style.left === "-1000px"){
                 //open menu drawer
                 menu.style.left = "";
             }
         });   
    }, false);
    
    //Listen to click event on cat image
    function catClickListener(cat){
        $(".cat").addEventListener("click", function(){
            //increase number of clicks for cat instance
            cat.increaseNumberOfClicks(); 
            //displays number of clicks for cat instance
            //clicksDisplay is the DOM element that shows the number of clicks for a cat instance
            displayNumberOfClicks(cat.getNumberOfClicks(), clicksDisplay);
         });
    }
    
    //render the selected cat image from the cat menu
    //Display the cat's name as well as its image
    //Update number of clicks display
    function showCatImage(cat){
         let div = document.createElement("div");
        //Display the cat's name as well as its image
        div.innerHTML = 
            `<p id="cat-name" class="cat-name text-center">${cat.getName()}</p>
            <img class="cat center" src="${cat.getImage()}" alt="${cat.getName} cat photo" />`;
        $(".cat-pic").appendChild(div);
        //Update number of clicks display
        displayNumberOfClicks(cat.getNumberOfClicks(), clicksDisplay);
    }
    
    //remove the cat placeholder div
    function removePlaceholder(){
        let catPic = $(".cat-pic");
        while(catPic.lastElementChild){
            catPic.lastElementChild.remove();
        }
            
    }
    
    //find cat object by cat name
    function findCat(name, array){
        let cat = array.find(function(element) {
                    return element.getName() === name;
                });
        
        return cat;
    }
    
    //create cat list <li> dom elements to create cat menu
    function catList(catArray){
        //create document fragment
        let fragment = document.createDocumentFragment();
        //loop through array of cat objects
        for(let cat of catArray){
            //create li dom elements
            let li = document.createElement("li");
            //add link child element to li
            li.innerHTML = `<a href="#" class="meow not-active">${cat.getName()}</a>`;
            //append list items to fragment
            fragment.appendChild(li);
        }
        //append fragment to ul dom element
        $(".cat-list").appendChild(fragment);
    }
    
    //creates JQuery style DOM element selector
    function $(selector){
       return document.querySelector(selector); 
    }
    
    //creates JQuery style DOM HTMLCollection selector
    function $$(selector){
       return document.querySelectorAll(selector); 
    }

    //Display number of cat clicks
    function displayNumberOfClicks(numberOfClicks, display){
        display.innerHTML = numberOfClicks;
    }
    
    //Display cat name
    function displayCatName(name, display){
        display.innerHTML = name;
    }
 })();


