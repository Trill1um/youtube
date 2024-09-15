let vidLocations=[]
let youtubers=[
    [
        "thumbnails/hq720.webp",
        "channelProfile/channels4_profile.jpg",
        "Magic The Noah",
        "Magic The Noah",
        "D&D, But The Players Are Terrible",
        "3.8M &#8226; 6 months ago",
        "46:22",
        "https://www.youtube.com/@MagicTheNoah",
        "https://www.youtube.com/@MagicTheNoah",
        "https://www.youtube.com/watch?v=9PNrA4-D-Xs&t=22s"
    ],
    [
        "thumbnails/hq720 (1).webp",
        "channelProfile/unnamed (2).jpg",
        "The Ink Tank",
        "The Ink Tank",
        "The ENTIRE Story of Ben10 ILLUSTRATED [All 5 Parts]",
        "9.1M views &#8226; 4 years ago",
        "43:19",
        "https://www.youtube.com/@TheInkTank",
        "https://www.youtube.com/@TheInkTank",
        "https://www.youtube.com/watch?v=JdAaO-MK8DU"
    ],
    [
        "thumbnails/hq720 (2).webp",
        "channelProfile/channels4_profile (1).jpg",
        "NileRed",
        "NileRed",
        "Turning styrofoam into cinnamon candy",
        "8.7M views &#8226; 5 months ago",
        "52:57",
        "https://www.youtube.com/@NileRed",
        "https://www.youtube.com/@NileRed",
        "https://www.youtube.com/watch?v=zMaTrgUKC1w&t=4s"
    ],
    [
        "thumbnails/hq720 (3).webp",
        "channelProfile/unnamed (3).jpg",
        "George Colier",
        "George Colier",
        "canon in D but it keeps getting jazzier",
        "7.6M views &#8226; 2 years ago",
        "8:14",
        "https://www.youtube.com/@GeorgeCollier",
        "https://www.youtube.com/@GeorgeCollier",
        "https://www.youtube.com/watch?v=lpc1lEJ-SRc"
    ],
    [
        "thumbnails/hq720 (4).webp",
        "channelProfile/unnamed (4).jpg",
        "Trash Taste Highlights",
        "Trash Taste Highlights",
        "Joey and Chris Made a Song That Topped Music Charts",
        "151K views &#8226; 3 years ago",
        "8:50",
        "https://www.youtube.com/@TrashTasteClips",
        "https://www.youtube.com/@TrashTasteClips",
        "https://www.youtube.com/watch?v=TAoZVhWrrLg"
    ],
    [
        "thumbnails/green.webp",
        "channelProfile/unnamed.jpg",
        "Alan Becker",
        "Alan Becker",
        "Green's Channel! - Influencer Arc Ep. 1",
        "1.5M views &#8226; 21 hours ago",
        "11:24",
        "https://www.youtube.com/@alanbecker",
        "https://www.youtube.com/@alanbecker",
        "https://www.youtube.com/watch?v=i6fwSzRiEJM"
    ],
    [
        "thumbnails/5.webp",
        "channelProfile/13.jpg",
        "Kurzgesagt - In a Nutshell",
        "Kurzgesagt - In a Nutshell",
        "Do You Have a Free Will?",
        "4.7M &#8226; 3 months ago",
        "12:17",
        "https://www.youtube.com/@kurzgesagt",
        "https://www.youtube.com/@kurzgesagt",
        "https://www.youtube.com/watch?v=UebSfjmQNvs&t=1s"
    ],
    [
        "thumbnails/6.webp",
        "channelProfile/2.jpg",
        "The Game Theorists",
        "The Game Theorists",
        "Game Theory: Into The Pit Changes The FNAF Timeline!",
        "974K views &#8226; 17 hours ago",
        "20:13",
        "https://www.youtube.com/@GameTheory",
        "https://www.youtube.com/@GameTheory",
        "https://www.youtube.com/watch?v=737ahpytLWo&t=22s"
    ],
    [
        "thumbnails/3.webp",
        "channelProfile/1.jpg",
        "Your Top 10s",
        "Your Top 10s",
        "Wild Animal Surprised Photographers in An Unexpected Way",
        "4M views &#8226; 3 weeks ago",
        "29:42",
        "https://www.youtube.com/@YT10s",
        "https://www.youtube.com/@YT10s",
        "https://www.youtube.com/watch?v=exdW3Em17kw&t=2s"
    ],
    [
        "thumbnails/8.webp",
        "channelProfile/10.jpg",
        "AnthonyPadilla",
        "AnthonyPadilla",
        "I spent a day with SYKKUNO",
        "993K views &#8226; 1 years ago",
        "24:21",
        "https://www.youtube.com/@AnthonyPadilla",
        "https://www.youtube.com/@AnthonyPadillar",
        "https://www.youtube.com/watch?v=9NCJWsGVZQA"
    ],
    [
        "thumbnails/9.webp",
        "channelProfile/11.jpg",
        "Columbia Kingsmen",
        "Columbia Kingsmen",
        "Sh-Boom (Life Could Be A Dream) (The Chords) | Columbia Kingsmen",
        "1.2M views &#8226; 5 years ago",
        "2:16",
        "https://www.youtube.com/@ColumbiaKingsmen",
        "https://www.youtube.com/@ColumbiaKingsmen",
        "https://www.youtube.com/watch?v=pC5L-bK36dw"
    ],
    [
        "thumbnails/ani1.webp",
        "channelProfile/ani.jpg",
        "Alan Becker",
        "Alan Becker",
        "「TO BE HERO X」コンセプトムービー（Long ver.）／bilibili × Aniplex 新プロジェクト",
        "223K views &#8226; 1 year ago",
        "6:08",
        "https://www.youtube.com/@aniplex",
        "https://www.youtube.com/@aniplex",
        "https://www.youtube.com/watch?v=08kp3Cs31Ow"
    ]
]

function updateVid() {
    for (let i = 0; i < youtubers.length; i++) {
            vidLocations=[
                document.getElementsByClassName("thumbnail")[i],
                document.getElementsByClassName("profile")[i],
                document.getElementsByClassName("channelName")[i],
                document.getElementsByClassName("channelNameHover")[i],
                document.getElementsByClassName("title")[i],
                document.getElementsByClassName("views")[i],
                document.getElementsByClassName("duration")[i],
                document.getElementsByClassName("channelLink")[i],
                document.getElementsByClassName("channelLinkHover")[i],
                document.getElementsByClassName("thumbnailLink")[i]
            ]
            for (let ii = 0; ii < youtubers[0].length; ii++) {
                switch (true) {
                    case ii<=1:
                        vidLocations[ii].src=youtubers[i][ii]
                        break;
                    case ii<=6:
                            vidLocations[ii].innerHTML=youtubers[i][ii]
                            break;
                    default: vidLocations[ii].href=youtubers[i][ii]
                        break;
                }
            }
    }
}


function addVid() {
    setTimeout(() => {
        for (let i = youtubers.length-1; i > 0; i--) {
            console.log("test")
            let vidPrime=document.getElementsByClassName("vid")[0]
            let vidDupe=vidPrime.cloneNode(true)
            document.getElementById("videos").appendChild(vidDupe)
        }
        updateVid()
    }, 1);
}