let count = 0;

let change = () =>{
    count++;
    console.log("Hello for the " + count + "th time...");
    document.body.style.backgroundColor = "pink";
    const bigWords = document.getElementsByClassName("title");
    bigWords[0].style.color="green";
    bigWords[1].style.fontSize="20px";
    console.log("Bye Pop_os!")
}