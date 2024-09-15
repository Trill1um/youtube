const elem = document.getElementById('selection');
let link=""
function sLeft() {
    elem.scrollLeft -= 410;
}

function sRight() {
    elem.scrollLeft += 410;
}

function alter() {
    switch (true) {
        case elem.scrollLeft<=20:
            document.getElementById("selectLeft").style.display="none"
            break;
        case (elem.scrollLeft/(elem.scrollWidth-elem.clientWidth)*100)>=99:
            document.getElementById("selectRight").style.display="none"
            break;
        default:
            document.getElementById("selectLeft").style.display="flex"
            document.getElementById("selectRight").style.display="flex"
        break;
    }
}

function filterSelect(element) {
    let arr=document.getElementsByClassName("filterSelection")
    Array.from(arr).forEach(el => {
        el.style["background-color"]="#272727"
        el.style.color="white"
    })
    document.querySelectorAll(".filterSelection")[element].style["background-color"]="white"
    document.querySelectorAll(".filterSelection")[element].style.color="#272727"
}

function animate() {
    requestAnimationFrame(animate)
    alter()
}
animate()

function disableScroll() {
    scrollTop = document.documentElement.scrollTop
    scrollLeft=0
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop)
        };
}

let con=false,ind=0
let moreAppear, moreButton;
let buttonPosition,buttonX,buttonY,appearX,appearY,appearW,appearH
function moreShow(index) {

    moreAppear=document.getElementsByClassName("moreBoxAppears")[index]
    moreButton=document.getElementsByClassName("moreButton")[index]
    if (moreAppear.style.display=="") {
        Array.from(document.getElementsByClassName("moreBoxAppears")).forEach(element => {
            element.style.display=""
        });
        moreAppear.style.display="block"
        ind=index
        disableScroll()

        buttonPosition =moreButton.getBoundingClientRect()
        buttonX=buttonPosition.left
        buttonY=buttonPosition.top
        appearPosition =moreAppear.getBoundingClientRect()
        appearX=appearPosition.left
        appearY=appearPosition.top
        appearW=appearPosition.width
        appearH=appearPosition.height

        
        switch (true) {
            case buttonY-appearH<0&&buttonY+appearH>window.innerHeight:
                moreAppear.style.left="40px"
                moreAppear.style.top="-40px"
                break;
            case buttonY-appearH<0&&buttonY+buttonPosition.height+appearH>window.innerHeight:
                moreAppear.style.left="40px"
                moreAppear.style.top="8px"
                break;
            case buttonY-appearH<0:
                moreAppear.style.top="48px"
                moreAppear.style.left="0px"
                break;
            case buttonY+buttonPosition.height+appearH>window.innerHeight:
                    moreAppear.style.top="-313px"
                    moreAppear.style.left="0px"
                break;
        }
        switch (true) {
            case buttonX+appearW>window.innerWidth:
                moreAppear.style.left="-217px"
                break;
        }
    } else{
        moreAppear.style.display=""
        window.onscroll = function () { }
    }
}

document.addEventListener("click", function(event) {
    if (!(document.getElementsByClassName("moreBoxAppears")[ind].contains(event.target))&&!(document.getElementsByClassName("moreButton")[ind].contains(event.target))) {
        document.getElementsByClassName("moreBoxAppears")[ind].style.display=""
        con=false
        window.onscroll = function () { }
    }
    let arr=Array.from(document.getElementsByClassName("details"))
    let arr1=Array.from(document.getElementsByClassName("moreButton"))
    let arr2=Array.from(document.getElementsByClassName("description"))
    let arr3=Array.from(document.getElementsByClassName("channelName"))
    let arr4=Array.from(document.getElementsByClassName("profileBox"))
    let arr5=Array.from(document.getElementsByClassName("profile"))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].contains(event.target)&&!arr1[i].contains(event.target)||arr2[i].contains(event.target)&&!arr3[i].contains(event.target)||arr4[i].contains(event.target)&&!arr5[i].contains(event.target)) {
            window.location=document.getElementsByClassName("thumbnailLink")[i].href
        }
    }
});
