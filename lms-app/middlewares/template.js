let statsTemplate = {
    email: "",
    registered: 0,
    courseCreated: 0,
    reviewsCount: 0,
    upvotes: 0,
    downvotes: 0,
    discussionPoints: 0,
    profileLikes: 0,
    studentsCount: 0,
    activeCategory: ""
}

let achievementTemplate = {
    email: "",
    achievements: [
        {
            id: "registered",
            info: "Number of courses completed",
            title: "Learner Badge",
            role: "user",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 3
        },
        {
            id: "upvotes",
            info: "Number of likes obtained",
            title: "Constructive Learner",
            role: "user",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 40
        },
        {
            id: "downvotes",
            info: "Number of dislikes obtained",
            title: "Destructive Learner",
            role: "user",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 40
        },
        {
            id: "discussionPoints",
            info: "Number of comments on discussion",
            title: "Active Community",
            role: "user",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 50
        },
        //instructor
        /* {
            id: "profileLikes",
            info: "Number of likes on profile",
            title: "Learner",
            level: 0,
            points: 0,
            nextReq: 0
        }, */
        {
            id: "studentsCount",
            info: "Number of Students",
            title: "Teacher Badge",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 100
        },
        {
            id: "courseCreated",
            info: "Number of courses created",
            title: "Spread Your knowledge",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 3
        },
        {
            id: "reviewsCount",
            info: "Number of reviews given",
            title: "Feedback Badge",
            url: "",
            level: 0,
            multiplier: 50,
            nextReq: 40
        }
    ]
}

let rank = ["Novice", "Apprentice", "Master", "GrandMaster", "Sage"]

let image = '<svg viewBox="-8 0 280 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="650px" height="450px"><desc>Created with getavataaars.com</desc><defs><circle id="path-1" cx="120" cy="120" r="120"/><path d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z" id="path-3"/><path d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z" id="path-5"/></defs><g id="Avataaar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-825.000000, -1100.000000)" id="Avataaar/Circle"><g transform="translate(825.000000, 1100.000000)"><g id="Circle" stroke-width="1" fill-rule="evenodd" transform="translate(12.000000, 40.000000)"><mask id="mask-2" fill="white"><use xlink:href="#path-1"/></mask><use id="Circle-Background" fill="#E6E6E6" xlink:href="#path-1"/><g id="Color/Palette/Blue-01" mask="url(#mask-2)" fill="#EFEFEF"><rect id="🖍Color" x="0" y="0" width="240" height="240"/></g></g><mask id="mask-4" fill="white"><use xlink:href="#path-3"/></mask><g id="Mask"/><g id="Avataaar" stroke-width="1" fill-rule="evenodd" mask="url(#mask-4)"><g id="Body" transform="translate(32.000000, 36.000000)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"/></mask><use fill="#D0C6AC" xlink:href="#path-5"/><g id="Skin/👶🏽-03-Brown" mask="url(#mask-6)" fill="#FD9841"><g transform="translate(0.000000, 0.000000)" id="Color"><rect x="0" y="0" width="264" height="280"/></g></g><path d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z" id="Neck-Shadow" fill-opacity="0.100000001" fill="#000000" mask="url(#mask-6)"/></g><g id="Clothing/Blazer-+-Sweater" transform="translate(0.000000, 170.000000)"><defs><path d="M105.192402,29.0517235 L104,29.0517235 L104,29.0517235 C64.235498,29.0517235 32,61.2872215 32,101.051724 L32,110 L232,110 L232,101.051724 C232,61.2872215 199.764502,29.0517235 160,29.0517235 L160,29.0517235 L158.807598,29.0517235 C158.934638,30.0353144 159,31.0364513 159,32.0517235 C159,45.8588423 146.911688,57.0517235 132,57.0517235 C117.088312,57.0517235 105,45.8588423 105,32.0517235 C105,31.0364513 105.065362,30.0353144 105.192402,29.0517235 Z" id="react-path-1"/></defs><mask id="react-mask-2" fill="white"><use xlink:href="#react-path-1"/></mask><use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-1"/><g id="Color/Palette/Black" mask="url(#react-mask-2)" fill-rule="evenodd" fill="#262E33"><rect id="🖍Color" x="0" y="0" width="264" height="110"/></g><g id="Blazer" stroke-width="1" fill-rule="evenodd" transform="translate(32.000000, 28.000000)"><path d="M68.784807,1.12222847 C30.512317,2.80409739 1.24427139e-14,34.3646437 0,73.0517235 L0,82 L69.3616767,82 C65.9607412,69.9199941 64,55.7087296 64,40.5 C64,26.1729736 65.7399891,12.7311115 68.784807,1.12222847 Z M131.638323,82 L200,82 L200,73.0517235 C200,34.7067641 170.024954,3.36285166 132.228719,1.17384225 C135.265163,12.7709464 137,26.1942016 137,40.5 C137,55.7087296 135.039259,69.9199941 131.638323,82 Z" id="Saco" fill="#3A4C5A"/><path d="M149,58 L158.555853,50.83311 L158.555853,50.83311 C159.998897,49.7508275 161.987779,49.7682725 163.411616,50.8757011 L170,56 L149,58 Z" id="Pocket-hanky" fill="#E6E6E6"/><path d="M69,1.13686838e-13 C65,19.3333333 66.6666667,46.6666667 74,82 L58,82 L44,46 L50,37 L44,31 L63,1 C65.027659,0.369238637 67.027659,0.0359053037 69,1.13686838e-13 Z" id="Wing" fill="#2F4351"/><path d="M151,1.13686838e-13 C147,19.3333333 148.666667,46.6666667 156,82 L140,82 L126,46 L132,37 L126,31 L145,1 C147.027659,0.369238637 149.027659,0.0359053037 151,1.13686838e-13 Z" id="Wing" fill="#2F4351" transform="translate(141.000000, 41.000000) scale(-1, 1) translate(-141.000000, -41.000000) "/></g><path d="M156,21.5390062 C162.772319,26.1359565 167,32.6563196 167,39.8878801 C167,47.2887711 162.572015,53.9447688 155.520105,58.5564942 L149.57933,53.8764929 L145,54.207887 L146,51.0567821 L145.922229,50.995516 C152.022491,47.8530505 156,42.7003578 156,36.8768102 L156,21.5390062 Z M108,21.5390062 C101.227681,26.1359565 97,32.6563196 97,39.8878801 C97,47.2887711 101.427985,53.9447688 108.479895,58.5564942 L114.42067,53.8764929 L119,54.207887 L118,51.0567821 L118.077771,50.995516 C111.977509,47.8530505 108,42.7003578 108,36.8768102 L108,21.5390062 Z" id="Collar" fill="#F2F2F2" fill-rule="evenodd"/></g><g id="Face" transform="translate(76.000000, 82.000000)" fill="#000000"><g id="Mouth/Default" transform="translate(2.000000, 52.000000)" fill-opacity="0.699999988"><path d="M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15" id="Mouth"/></g><g id="Nose/Default" transform="translate(28.000000, 40.000000)" fill-opacity="0.16"><path d="M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8" id="Nose"/></g><g id="Eyes/Default-😀" transform="translate(0.000000, 8.000000)" fill-opacity="0.599999964"><circle id="Eye" cx="30" cy="22" r="6"/><circle id="Eye" cx="82" cy="22" r="6"/></g><g id="Eyebrow/Outline/Default" fill-opacity="0.599999964"><g id="I-Browse" transform="translate(12.000000, 6.000000)"><path d="M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z" id="Eyebrow" fill-rule="nonzero"/><path d="M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z" id="Eyebrow" fill-rule="nonzero" transform="translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) "/></g></g></g><g id="Top" stroke-width="1" fill-rule="evenodd"><defs><rect id="react-path-5" x="0" y="0" width="264" height="280"/><path d="M48.7246602,89.2187346 C44.7420117,91.1711421 42,95.2653555 42,100 L42,113 C42,119.018625 46.4308707,124.002364 52.2085808,124.867187 C53.9518066,145.114792 66.4692178,162.282984 84,170.610951 L84,189 L80,189 L80,189 C78.4137385,189 76.8394581,189.051297 75.2787271,189.152323 C70.3620966,186.639548 65.7724391,183.578174 61.590479,180.048925 C57.2814481,181.318646 52.7202934,182 48,182 C21.490332,182 0,160.509668 0,134 C0,119.590902 6.34904132,106.664702 16.4021743,97.866349 C11.1175746,90.6060809 8,81.6671147 8,72 C8,50.160623 23.9112243,32.0375116 44.7738169,28.5905219 C51.0188047,11.8901624 67.1208542,0 86,0 C94.0143172,0 101.528186,2.14267429 108,5.88641659 C114.471814,2.14267429 121.985683,0 130,0 C148.879146,0 164.981195,11.8901624 171.226183,28.5905219 C192.088776,32.0375116 208,50.160623 208,72 C208,81.6671147 204.882425,90.6060809 199.597826,97.866349 C209.650959,106.664702 216,119.590902 216,134 C216,160.509668 194.509668,182 168,182 C163.279707,182 158.718552,181.318646 154.409521,180.048925 C150.227561,183.578174 145.637903,186.639548 140.721273,189.152323 C139.160542,189.051297 137.586262,189 136,189 L136,189 L132,189 L132,170.610951 C149.530782,162.282984 162.048193,145.114792 163.791419,124.867187 C169.569129,124.002364 174,119.018625 174,113 L174,100 C174,95.778427 171.820067,92.0660046 168.524466,89.9269981 C167.450514,89.5343912 166.370126,89.0424011 165.289302,88.4564081 C164.868503,88.3367332 164.43828,88.2394463 164,88.1659169 L164,87.7130302 C155.319369,82.4100235 146.764694,71.1747746 141.449951,56.7992877 C131.312295,58.8351061 119.547256,60 107,60 C95.038684,60 83.7882341,58.9413637 73.9808476,57.0787685 C68.7546917,71.0641476 60.4637821,82.0431875 52,87.4230168 L52,88.1659169 C50.9777341,88.3374206 49.9992949,88.6381729 49.0820602,89.050796 C48.9628927,89.1079465 48.8437566,89.1639284 48.7246602,89.2187346 Z" id="react-path-6"/></defs><mask id="react-mask-3" fill="white"><use xlink:href="#react-path-5"/></mask><g id="Mask"/><g id="Top/Long-Hair/Curly" mask="url(#react-mask-3)"><g transform="translate(-1.000000, 0.000000)"><path d="M105.984735,27.7643628 C114.013215,26.6267967 122.796163,26 132,26 C142.358003,26 152.182939,26.7938545 160.999342,28.2161842 C183.451688,38.7497687 199,61.559133 199,88 L199,105.044138 C187.461887,104.672508 173.831239,90.7644306 166.449951,70.7992877 C156.312295,72.8351061 144.547256,74 132,74 C120.038684,74 108.788234,72.9413637 98.9808476,71.0787685 C91.6758772,90.6271291 78.3831001,104.301811 67,105.021902 L67,88 L67,88 C67,61.1745453 83.0039076,38.0870034 105.984735,27.7643628 Z" id="Shadow" fill-opacity="0.16" fill="#000000" fill-rule="evenodd"/><g id="Hair" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(25.000000, 10.000000)"><mask id="react-mask-4" fill="white"><use xlink:href="#react-path-6"/></mask><use id="Curly!" fill="#314756" xlink:href="#react-path-6"/><g id="Skin/👶🏽-03-Brown" mask="url(#react-mask-4)" fill="#A55728"><g transform="translate(0.000000, 0.000000) " id="Color"><rect x="0" y="0" width="264" height="280"/></g></g></g></g></g></g></g></g></g></g></svg>'

function getStatsTemplate() {
    return statsTemplate
}

function getAchievementTemplate() {
    return achievementTemplate
}

function updateAchievements(data) {
    //data == achievements array

}

function getDefaultImg() {
    return image
}


module.exports = {
    getStatsTemplate,
    getAchievementTemplate,
    updateAchievements,
    getDefaultImg
}