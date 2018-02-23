export default function loadState() {
    return {
        preload: function () {
            var loadingLabel = this.game.add.text(80, 150, 'loading...', { font: '30px Courier', fill: '#fff' });

            this.game.load.image('player', 'img/grey.png');
            this.game.load.image('win', 'img/yellow.png');
        },
        create: function () {
            this.game.state.start('menu');
        }
    }
}