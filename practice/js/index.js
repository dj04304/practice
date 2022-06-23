const btn = document.querySelector(".btn");
const inputUrl = document.querySelector("#http");
const HotelPick = document.querySelector(".Hotel");
const chooseBtn = document.querySelector(".btn2");
const bookBtn = document.querySelector(".btn3");

btn.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++){
        if(inputUrl.value.includes(protocols[i])){
            location.href = inputUrl.value;
            return;
        }

        location.href = "http://" + inputUrl.value;

    }
}

inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13){
            btn.onclick();
    }
}


chooseBtn.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");
    console.log(protocols)
    

    for(let i = 0; i < protocols.length; i++){
        if(HotelPick.value.includes(protocols[i])){
            location.href = HotelPick.value;
            return
        }else if (HotelPick.value.includes("신라")){
            location.href = "https://www.shillahotels.com/index.do"
            return
        }else if (HotelPick.value.includes("소노")){
            location.href = "https://www.sonohotelsresorts.com/main.index.dp/dmparse.dm"
            return
        }
            alert("호텔을 선택해주세요");
            return
    }
    
}

HotelPick.onkeypress = () =>{
    if(window.event.keyCode == 13){
        chooseBtn.onclick();
    }
}

bookBtn.onclick = () => {
        if(HotelPick.value.includes("신라") || HotelPick.value.includes("소노")){
            alert("예약되었습니다.");
        }else{
            alert("호텔을 선택해주세요");
        }
}



