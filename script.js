let selectionDivs = document.querySelectorAll(".same");
let selectionMainDiv =document.querySelector(".main")
let count =1;
selectionMainDiv.addEventListener("click",function(){
count++;
});




for(let i=0;i<selectionDivs.length;i++)
{
    selectionDivs[i].addEventListener("click",function(){
        let touce =this.textContent;
        switch(touce)
        {
            case "1":
                if(count%2===0)
                {
                    this.classList.add("wrong")
                }
                else {
                    this.classList.add("right")
                }
                break;
            case "2":
                if(count%2===0)
                {
                    this.classList.add("wrong")
                }
                else {
                    this.classList.add("right")
                }
                break;
            case "3":
                if(count%2===0)
                {
                    this.classList.add("wrong")
                }
                else {
                    this.classList.add("right")
                }
                break;
            case "4":
                if(count%2===0)
                {
                    this.classList.add("wrong")
                }
                else {
                    this.classList.add("right")
                }
                break;
             case "5":
                    if(count%2===0)
                    {
                        this.classList.add("wrong")
                    }
                    else {
                        this.classList.add("right")
                    }
                    break;
                    case "6":
                        if(count%2===0)
                        {
                            this.classList.add("wrong")
                        }
                        else {
                            this.classList.add("right")
                        }
                        break;
                        case "7":
                            if(count%2===0)
                            {
                                this.classList.add("wrong")
                            }
                            else {
                                this.classList.add("right")
                            }
                            break;
                            case "8":
                                if(count%2===0)
                                {
                                    this.classList.add("wrong")
                                }
                                else {
                                    this.classList.add("right")
                                }
                                break; 
                                case "9":
                                    if(count%2===0)
                                    {
                                        this.classList.add("wrong")
                                    }
                                    else {
                                        this.classList.add("right")
                                    }
                                    break;          

            
        }
    })
}
document.querySelector("button").addEventListener("click",function(){
    location.reload();
})