import Phaser, { DOWN } from 'phaser';

class ChestMan extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y) {
		super(scene, x, y, 'ChestMan');

		scene.add.existing(this);
		scene.physics.add.existing(this);

		

		this.init();
		this.initEvents();
	}

	init() {
		this.gravity = 0;
		this.ChestManSpeed = 200;
		this.cursors = this.scene.input.keyboard.createCursorKeys();
		this.previousSpeed;

		this.keys = this.scene.input.keyboard.addKeys('W,A,S,D');

		this.setCollideWorldBounds(true);
	}

	initEvents() {
		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this)
	}

	update() {
		this.setScale(.25);

		const { left, right, up, down } = this.cursors;

		// move left and right
		if (left.isDown) {
			this.setVelocityX(-this.ChestManSpeed);
			console.log('a');
			this.setFlipX(true);
		} else if (right.isDown) {
			this.setVelocityX(this.ChestManSpeed);
			this.setFlipX(false)
			console.log('d')
		} else {
			this.setVelocityX(0);
		}

		// jump with up arrow
		if (up.isDown) {
			this.setVelocityY(-this.ChestManSpeed);
		} else if (down.isDown) {
			this.setVelocityY(this.ChestManSpeed);
		} else {
			this.setVelocityY(0);
		}


		// move left and right
		// if (a.isDown) {
		// 	this.setVelocityX(-this.ChestManSpeed);
		// 	console.log('left');
		// 	this.setFlipX(true);
		// } else if (d.isDown) {
		// 	this.setVelocityX(this.ChestManSpeed);
		// 	this.setFlipX(false)
		// 	console.log('right');
		// } else {
		// 	this.setVelocityX(0);
		// }

		// // jump with up arrow
		// if (w.isDown) {
		// 	this.setVelocityY(-this.ChestManSpeed);
		// 	console.log('space');
		// } else if (s.isDown) {
		// 	this.setVelocityY(this.ChestManSpeed);
		// }

		
		
	}
}

export default ChestMan;