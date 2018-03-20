var ArrayUser = [];
var a = document.getElementById("a").style.display="block",
    b = document.getElementById("b").style.display="none";
    function Regiter(){ 

        let User = {name:"nall",username:"nall",pass:"nall"};

           User.name = document.getElementById("Name").value;
           User.username = document.getElementById("UName").value;
           User.pass = document.getElementById("Pass").value;

           ArrayUser.push(User);
           console.log(ArrayUser);
    }
    function az(){
        a = document.getElementById("b").style.display="block";
        b = document.getElementById("a").style.display="none";
    }
    function Login(){
        let UN,Pass;
        UN = document.getElementById("LName").value;
        Pass = document.getElementById("LPass").value;
        for (let index = 0; index < ArrayUser.length; index++) {
            if (ArrayUser[index].username == UN) {
                if (ArrayUser[index].pass == Pass) {
                    a = document.getElementById("b").style.display="none";
                    b = document.getElementById("a").style.display="none";
                    document.getElementById("c").innerHTML = ArrayUser[index].name;
                }
            }
            
        }
    }