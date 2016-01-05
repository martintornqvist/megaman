/**
 * Created by martintornqvist on 2016-01-03.
 */

var megamanGame = {};

megamanGame.Boot = function(game){

};

megamanGame.Boot.prototype = {
    init: function(){
        //Pause game if browser lose focus
        this.stage.disableVisibilityChange = true;
    },

    preload: function(){
        //Add loading bar?

        //Load background image for boot screen
        this.load.image('preloadBackground', 'assets/boot/background.jpg');
        //Load background image for gameplay
        this.load.image('gameBackground', 'assets/desert_BG.png');
    },

    create: function(){
        //Boot into preloader
        this.state.start('Preloader');
    }
};