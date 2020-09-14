'use strict';

function homeScreenHTML(){
    return`  
   
    <section>
    <div class="group">
       <div class="item">
            <form class="user">
               <h3 id="userName">Enter Your User Name</h3>
               <input type="search" id="mySearch">
             </form>
      </div>
         <div class="item">
               <form class="friend">
                 <h3 id="friendName">Enter Your Friend's User Name</h3>
                   <input type="search" id="mySearchFriend">
               </form>
         </div>
    </div>
   <input type="submit" id="mySearchButton" value="submit" >
</section>`
}

function resultsHTML(){
    $('.heading').hide();
 return`   <section>
    <div class="group">
       <div class="item">
            <form class="user">
                     <section id="results">
                     <ul id="results-list">
                        <div class="tab">
                            <button class="userlinks" onclick="openTab(event, 'Player Stats')">Player Stats</button>
                            <button class="userlinks" onclick="openTab(event, 'Game Stats')">Game Stats</button>
                            <button class="userlinks" onclick="openTab(event, 'Weapon Stats')">Weapon Stats</button> 
                        </div>               
                 </ul>
               </section>
             </form>
      </div>
         <div class="item">
               <form class="friend">
                   <section id="results-friend">
                     <ul id="results-list-friend">
                     <div class="tab">
                     <button class="tablinks2" onclick="openTabFriend(event, 'Player Stats2')" id="defaultOpen">Player Stats</button>
                            <button class="tablinks2" onclick="openTabFriend(event, 'Game Stats2')">Game Stats</button>
                            <button class="tablinks2" onclick="openTabFriend(event, 'Weapon Stats2')">Weapon Stats</button>
                        </div>
                 </ul>
               </section>
               </form>
         </div>
    </div>
</section>`
}


function getUserbyId(){
    
    let gamerTag = document.getElementById("mySearch").value;
    let re = /#/gi;
    let newGamerTag =gamerTag.replace(re, "%2523");
    console.log(newGamerTag);

    fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/" + newGamerTag + '/battle', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
            "x-rapidapi-key": "07eac59be6msh033adcb81dfbd8ap1cd261jsn2c313c93b433"
        }
    })
    .then(response => response.json())
    .then(response => 
    displayResults(response));

  };

  function displayResults(response) {
    console.log(response);

    let sumAR =  response.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_anovember94.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_galima.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552.properties.kills
    + response.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties.kills;
 
    let sumSMG = response.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_charlie9.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.kills
    + response.lifetime.itemData.weapon_smg.iw8_sm_victor.properties.kills;
 
    let sumLMG = response.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_mkilo3.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.kills
    + response.lifetime.itemData.weapon_lmg.iw8_lm_sierrax.properties.kills;
 
    let sumSG =  response.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties.kills
    + response.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties.kills
    + response.lifetime.itemData.weapon_shotgun.iw8_sh_mike26.properties.kills
    + response.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties.kills
    + response.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties.kills;
 
    let sumSN = response.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties.kills
    + response.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.kills
    + response.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties.kills
    + response.lifetime.itemData.weapon_sniper.iw8_sn_xmike109.properties.kills;
 
    let sumP = response.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.kills
    + response.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.kills
    + response.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties.kills
    + response.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.kills
    + response.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties.kills
    + response.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties.kills;

    $('#results-list').append(
        `<h3>${response.username}</h3>
    <div id="Player Stats" class="userTab">
        <p>Level: ${response.level}<p>
        <p>Accuracy: ${response.lifetime.all.properties.accuracy}</p>
        <p>K/D Ratio: ${response.lifetime.all.properties.kdRatio}</p>
        <p>Kills: ${response.lifetime.all.properties.kills}</p>
        <p>Deaths: ${response.lifetime.all.properties.deaths}</p>
        <p>Headshots: ${response.lifetime.all.properties.headshots}</p>
        <p>Misses: ${response.lifetime.all.properties.misses}</p>
        </div>
    <div id="Game Stats" class="userTab">
        <p>Games Played: ${response.lifetime.all.properties.gamesPlayed}</p>
        <p>Wins: ${response.lifetime.all.properties.wins}</p>
        <p>Wins loss Ratio: ${response.lifetime.all.properties.wlRatio}</p>
        <p>Longest Win Streak: ${response.lifetime.all.properties.recordLongestWinStreak}</p>
        <p>Most Kills in a Match: ${response.lifetime.all.properties.recordKillsInAMatch}</p>
        <p>Highest Kill Streak: ${response.lifetime.all.properties.recordKillStreak}</p>
        <p>Suicides: ${response.lifetime.all.properties.suicides}</p>
        </div>
        <div id="Weapon Stats" class="userTab">
        <p> Assault Rifle Kills: ${sumAR}
        <p> SMG Kills: ${sumSMG}
        <p> LMG Kills: ${sumLMG}
        <p> Shotgun Kills: ${sumSG}
        <p> Sniper Rifle Kills: ${sumSN}
        <p> Pistol Kills: ${sumP}
        </div>
        `  )
    };


function getFriendUserbyId(){
    
    let gamerTagFriend = document.getElementById("mySearchFriend").value;
    let re = /#/gi;
    let newGamerTagFriend =gamerTagFriend.replace(re, "%2523");
    console.log(newGamerTagFriend);

    fetch("https://call-of-duty-modern-warfare.p.rapidapi.com/multiplayer/" + newGamerTagFriend + '/battle', {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com",
            "x-rapidapi-key": "4f73f6c31fmshcd3619c19341d56p122b48jsn0b9f0f427edc"
        }
    })
    .then(response => response.json())
    .then(responseJson => 
    displayResultsFriend(responseJson));

window.addEventListener('error', function(e) {            
 e.target.parentNode.innerHTML = "Oh no! Could not find that user!";
}, true);
}


function displayResultsFriend(responseJson) {
    console.log(responseJson);

   let sumAR =  responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_akilo47.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_anovember94.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_asierra12.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_falima.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_falpha.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_galima.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_kilo433.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_mcharlie.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_mike4.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_scharlie.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_sierra552.properties.kills
   + responseJson.lifetime.itemData.weapon_assault_rifle.iw8_ar_tango21.properties.kills;

   let sumSMG = responseJson.lifetime.itemData.weapon_smg.iw8_sm_augolf.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_beta.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_charlie9.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_mpapa5.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_mpapa7.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_papa90.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_smgolf45.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_uzulu.properties.kills
   + responseJson.lifetime.itemData.weapon_smg.iw8_sm_victor.properties.kills;

   let sumLMG = responseJson.lifetime.itemData.weapon_lmg.iw8_lm_kilo121.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_lima86.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_mgolf34.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_mgolf36.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_mkilo3.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_pkilo.properties.kills
   + responseJson.lifetime.itemData.weapon_lmg.iw8_lm_sierrax.properties.kills;

   let sumSG =  responseJson.lifetime.itemData.weapon_shotgun.iw8_sh_charlie725.properties.kills
   + responseJson.lifetime.itemData.weapon_shotgun.iw8_sh_dpapa12.properties.kills
   + responseJson.lifetime.itemData.weapon_shotgun.iw8_sh_mike26.properties.kills
   + responseJson.lifetime.itemData.weapon_shotgun.iw8_sh_oscar12.properties.kills
   + responseJson.lifetime.itemData.weapon_shotgun.iw8_sh_romeo870.properties.kills;

   let sumSN = responseJson.lifetime.itemData.weapon_sniper.iw8_sn_alpha50.properties.kills
   + responseJson.lifetime.itemData.weapon_sniper.iw8_sn_delta.properties.kills
   + responseJson.lifetime.itemData.weapon_sniper.iw8_sn_hdromeo.properties.kills
   + responseJson.lifetime.itemData.weapon_sniper.iw8_sn_xmike109.properties.kills;

   let sumP = responseJson.lifetime.itemData.weapon_pistol.iw8_pi_cpapa.properties.kills
   + responseJson.lifetime.itemData.weapon_pistol.iw8_pi_decho.properties.kills
   + responseJson.lifetime.itemData.weapon_pistol.iw8_pi_golf21.properties.kills
   + responseJson.lifetime.itemData.weapon_pistol.iw8_pi_mike9.properties.kills
   + responseJson.lifetime.itemData.weapon_pistol.iw8_pi_mike1911.properties.kills
   + responseJson.lifetime.itemData.weapon_pistol.iw8_pi_papa320.properties.kills;


   $('#results-list-friend').append(
        `<h3>${responseJson.username}</h3>
        <div id="Player Stats2" class="friendTab">
    
      <p>Level: ${responseJson.level}<p>
        <p>Accuracy: ${responseJson.lifetime.all.properties.accuracy}</p>
      <p>K/D Ratio: ${responseJson.lifetime.all.properties.kdRatio}</p>
       <p>Kills: ${responseJson.lifetime.all.properties.kills}</p>
       <p>Deaths: ${responseJson.lifetime.all.properties.deaths}</p>
       <p>Headshots: ${responseJson.lifetime.all.properties.headshots}</p>
      <p>Misses: ${responseJson.lifetime.all.properties.misses}</p>

</div>
<div id="Game Stats2" class="friendTab">
 <p>Games Played: ${responseJson.lifetime.all.properties.gamesPlayed}</p>
        <p>Wins: ${responseJson.lifetime.all.properties.wins}</p>
        <p>Wins loss Ratio: ${responseJson.lifetime.all.properties.wlRatio}</p>
        <p>Longest Win Streak: ${responseJson.lifetime.all.properties.recordLongestWinStreak}</p>
        <p>Most Kills in a Match: ${responseJson.lifetime.all.properties.recordKillsInAMatch}</p>
        <p>Highest Kill Streak: ${responseJson.lifetime.all.properties.recordKillStreak}</p>
        <p>Suicides: ${responseJson.lifetime.all.properties.suicides}</p>
</div>
<div id="Weapon Stats2" class="friendTab">
<p> Assault Rifle Kills: ${sumAR}
<p> SMG Kills: ${sumSMG}
<p> LMG Kills: ${sumLMG}
<p> Shotgun Kills: ${sumSG}
<p> Sniper Rifle Kills: ${sumSN}
<p> Pistol Kills: ${sumP}
</div>
        `   
   )
    
    
};


function watchForm (){
    $('body').on('click', '#mySearchButton', function(event){
        console.log("click");
        event.preventDefault();
        getUserbyId();
        getFriendUserbyId();
        $('main').html(resultsHTML());
    });

};



function openTab(event, tabName) {
     
  event.preventDefault();
   var i, userTab, userlinks;
  

    userTab = document.getElementsByClassName("userTab");
   for (i = 0; i < userTab.length; i++) {
        userTab[i].style.display = "none";
    }

  
     //Get all elements with class="tablinks" and remove the class "active"
   userlinks = document.getElementsByClassName("userlinks");
   for (i = 0; i < userlinks.length; i++) {
        userlinks[i].className = userlinks[i].className.replace(" active", "");
    }

  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.tabName += " active";
   }



   function openTabFriend(event, tabName){
    event.preventDefault();
    var i, friendTab, tablinks2;

    friendTab = document.getElementsByClassName("friendTab");
    for (i = 0; i < friendTab.length; i++) {
        friendTab[i].style.display = "none";
   }

   tablinks2 = document.getElementsByClassName("tablinks2");
   for (i = 0; i < tablinks2.length; i++) {
      tablinks2[i].className = tablinks2[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.tabName += " active";   
   }

    $(function() {
        console.log('App loaded! Waiting for submit!');
        $('main').html(homeScreenHTML());
        watchForm();
      });
