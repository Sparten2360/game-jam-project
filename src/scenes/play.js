import Phaser from 'phaser';
import LegMan from '../entities/LegMan';
import ChestMan from '../entities/ChestMan';
import BasicEnemy from '../entities/BasicEnemy';
class Play extends Phaser.Scene {

	constructor() {
		super('PlayScene');
	}

	create () {
		//this.createBG();
		const map = this.createMap();
		const layers = this.createLayers(map);

		const LegMan = this.createLegMan();
		const ChestMan = this.createChestMan();
		const BasicEnemy = this.createBasicEnemy();

		this.physics.add.collider(LegMan, layers.platforms);
		this.physics.add.collider(ChestMan, layers.platforms);
	}

	createLegMan() {
		return new LegMan(this, 100, 250);
	}

	createChestMan() {
		return new ChestMan(this, 100, 10);
	}

	createBasicEnemy() {
		return new BasicEnemy(this, 500, 20);
	}
	createCrossHair(){
		return new CrossHair(this,500,20);
	}




	createMap() {
		const map = this.make.tilemap({key: 'map'});
		map.addTilesetImage('main_lev_build_1', 'tiles-1');
		return map;
	}

	createLayers(map) {
		const tileset = map.getTileset('main_lev_build_1');
		const platforms = map.createStaticLayer('platforms', tileset);

		platforms.setCollisionByExclusion(-1);

		return { platforms };
	}
}

export default Play;