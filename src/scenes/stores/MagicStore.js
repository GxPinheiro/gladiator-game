class MagicStore extends Phaser.Scene {
    constructor() {
        super("magic_store");
    }

    preload() {
        this.load.image('magic_store_background', './src/assets/store_scenes/magic_store.png');
    }

    create() {
        this.add.image(400, 300, 'magic_store_background');

        goBackButton = this.input.keyboard.addKey('Q');

        this.add.text(50, 520, "Press Q to exit the shop", {fontFamily: "courier", color: "black"});
    }

    update() {
        listenShopExit(638, 488, this);
    }
}
