import Phaser from 'phaser';

class Preload extends Phaser.Scene {

	constructor() {
		super('PreloadScene');
	}

	preload () {

		// characters
		this.load.image('LegMan', 'assets/Leg_Man-removebg-preview.png');
		this.load.image('ChestMan', 'assets/Fly_Guy_Torso-removebg-preview.png');

		// enemies
		this.load.spritesheet('BasicEnemy', 'assets/Flying_Enemy_Move.png', {
			frameWidth: 81, frameHeight: 57
		})

		this.load.image('ChestManArm', 'assets/Fly_Guy_Arm-removebg-preview.png')



		// map
		this.load.tilemapTiledJSON('map', 'assets/testMap.json');
		this.load.image('tiles-1', 'assets/main_lev_build_1.png');
	}

	create () {
		this.scene.start('PlayScene');

	}
}

export default Preload;