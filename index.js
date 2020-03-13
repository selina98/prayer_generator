var prayers = [
    'LORD, I need more of you in my finances',
    'LORD, I need more of you in my relationships',
    'LORD, I need more of you in the daily',
    'LORD, I need Your unending and perfect patience',
    "LORD, I need to prioritize You even when it isn't convenient for me. Let me build You a home in my heart before I build my focus on my needs. (Haggai 1)",
    "LORD, I need Your consistency. The way You are consistent in how You love others is perfect and I yearn to learn from You.",
    "LORD, if we are Your children, then we are called to be in communion with You through prayer. Give me a heart that constantly yearns for You.",
    "LORD, Your words are like honey, sweet to my soul and healing to my bones (Psalms 119:103). I want Your words to guide me and reign in my life.",
    "LORD, Your compassion is endless in suffering and in the hopelessness. Even though I fall short in the daily, Your steadfast love never ceases, Your mercies are new every\
    morning. Great is thy faithfulness to us, even though we are undeserving. (Lamentations 3:22-23)",
    "LORD, I need Your persistenace in pursuit of us to be the standard for how I should pursue You",
    "LORD, I pray that You would reach stubborn hearts and soften them. I pray that you would open unrelenting ears",
    "LORD, I want to approach You desperately, in everything",
    "LORD, show me how I can serve others today",
    "LORD, I want to love You more than anything",
    "LORD, I want to always be in constant humility and awe for who You are and what You have done for us. Behold! You sent a perfect lamb to bear Your wrath so that we\ may be in perfect communion with You again.",
    "LORD, 'make me a vessel, make me an offering, make me whatever You want me to be.' (New Wine, Hillsong)",
    "LORD, I pray for healing in sickness",
    "Search me, LORD, and know my heart. Test me & know my anxious thoughts. See if there is any offensive way in me, and lead me in the way of everlasting (Ps. 139: 23-24)",
    "LORD, there is nothing that is too much or too difficult for You. Who, would ask for a fish and receive a rock? Lord, You are not our enemy, You provide in plenty, all we have to do is ask. Give us the courage to pray bold prayers,\
    consistently. desperately. unashamedly",
    "LORD, let me trust in Your ways with all my heart and lean not on my own understanding. I want to acknowledge You so that You would make my paths straight (Proverbs 3:5-6)",
    "LORD, let me approach You with holy surrender. I cannot, by worrying, add a second to my life. You are sovereign and You hold my future in Your hands. I can trust that how You\
    are working in my life is what is best.",
    "LORD, let my life be a light that shines before others, so that they may see Your good works and give glory to You (Matthew 5)",
    "LORD, let me be quick to listen, slow to speak, and slow to anger (James 1:19)",
    "LORD, break my heart for what breaks Yours.",
    "LORD, stir in me. I want to build Your church. Give me the strength to serve.",
    "Stir in me, LORD, so that I may in great abundance bring forth the fruit of good works that You have called me to produce",
]
let  displayPrayer = () => {
    var randomNumber = Math.floor(Math.random() * prayers.length);
    document.getElementById('prayerDisplay').innerHTML = prayers[randomNumber];
}

let startTime = () => {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

let checkTime = (i) => {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

let startDate = () => {
    var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
  }


  var images = ['background3.jpg', 'background1.jpg', 'background2.jpg'];
  var randomImg = images[Math.floor(Math.random() * images.length)];

  window.onload = function () {
      startDate();
      startTime();
      document.body.style.backgroundImage = `url('images/${this.randomImg}')`;
      this.console.log(this.randomImg);
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundPosition = "top";
      document.body.style.backgroundSize = "cover";
  }

 
