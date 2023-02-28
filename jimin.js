const root = document.getElementById('root');
let a =0;
const object = {
  head : "",
  body : "",
  maketext : function (head,body) {
    root.style.width=430+"px";
    root.style.height=932+"px";
    root.style.backgroundColor="white";
    root.style.position="relative";
    this.head = `${head}`;
    this.body = `${body}`;

    const subtext = document.createElement('div');
    subtext.innerText=`${this.head}`;
    subtext.style.width=147+"px";
    subtext.style.height=29+"px";
    subtext.style.position="absolute";
    subtext.style.top=301+"px";
    subtext.style.left=141+"px";
    subtext.style.fontFamily="inter";
    subtext.style.fontStyle="normal";
    subtext.style.fontWeight=400;
    subtext.style.fontSize=24+"px";
    
    root.appendChild(subtext);

    const div = document.createElement('div');
    div.style.width=199+"px";
    div.style.height=2+"px";
    div.style.position="absolute";
    div.style.top=340+"px";
    div.style.left=115+"px";
    div.style.backgroundColor="black"    
    root.appendChild(div);

    const maintext =document.createElement('div');
    maintext.textContent=`${this.body}`;
    maintext.style.width=295+"px";
    maintext.style.height=186+"px";
    maintext.style.position="absolute";
    maintext.style.top=364+"px";
    maintext.style.left=67+"px";
    maintext.style.fontFamily="inter";
    maintext.style.fontStyle="normal";
    maintext.style.fontWeight=400;
    maintext.style.fontSize=12+"px";


    root.appendChild(maintext);

    const button = document.createElement('button');
    button.style.width=82+"px";
    button.style.height=82+"px";
    button.style.position="absolute";
    button.style.top=673+"px";
    button.style.left=174+"px";
    button.style.borderRadius=41+"px";
    button.style.backgroundColor="gray";
    root.appendChild(button)

    button.addEventListener('click',()=>{
      
      a++;
      if (a%2==1){
        root.style.backgroundColor="gray";
        subtext.style.color="white";
        div.style.backgroundColor="white";
        maintext.style.color="white";
        button.style.backgroundColor="white";
      }
      else{
        root.style.backgroundColor="white";
        subtext.style.color="black";
        div.style.backgroundColor="black";
        maintext.style.color="black";
        button.style.backgroundColor="gray";
      }
    })


  }
}

object.maketext("Lorem lpsum","Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo ipsum sed cumque corrupti atque excepturi corporis reprehenderit, aperiam dicta dignissimos temporibus explicabo vero facilis placeat quasi officiis labore magni.")

console.dir(root);