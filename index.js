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
        <p> Game Stats</p>
        </div>
        </div>
        <div id="Weapon Stats" class="userTab">
        <p> Weapon Stats</p>
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
<p> Game Stats</p>
</div>
</div>
<div id="Weapon Stats2" class="friendTab">
<p> Weapon Stats</p>
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
