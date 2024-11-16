let players =[];
let iframe = document.getElementsByTagName('iframe');
for (let i=0; i<iframe.length; i++){
    let player = new Vimeo.Player(iframe[i]);
    player.on('play', function() {
        console.log(player.id);
        // for (let i=0; i<iframe.length; i++){
        //     let player_ = new Vimeo.Player(iframe[i]);
        //     if (player.id != player_.id){
        //         player_.pause();
        //         console.log("pause");
        //     }
        // }
      });
  
    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
    players.push(player);
}

console.log(players);