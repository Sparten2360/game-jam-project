import Phaser from 'phaser';

class Preload extends Phaser.Scene {

	constructor() {
		super('PreloadScene');
	}

	preload () {
		// characters
		this.load.spritesheet('LegMan', 'assets/Leg_Run.png', {
			frameWidth: 120, frameHeight: 150
		})
		this.load.image('ChestMan', 'assets/Fly_Guy_Torso-removebg-preview.png');
		// enemies
		this.load.spritesheet('BasicEnemy', 'assets/Flying_Enemy_Move.png', {
			frameWidth: 81, frameHeight: 57
		})
				// map
		this.load.tilemapTiledJSON('map', 'assets/testMap.json');
		this.load.image('tiles-1', 'assets/main_lev_build_1.png');
		this.load.image('CrossHair', 'assets/Fly_Guy_Arm-removebg-preview.png')
	}

	create () {
		this.scene.start('PlayScene');
	}
}

export default Preload;