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
		this.add.image(0,0, 'bg').setOrigin(0).setScale(3.25);

		const map = this.createMap();
		const layers = this.createLayers(map);

		
		const LegMan = this.createLegMan();
		const ChestMan = this.createChestMan();
		const BasicEnemy = this.createBasicEnemies(layers.enemySpawns);

		LegMan.addCollider(layers.platforms);
		ChestMan.addCollider(layers.platforms);

		LegMan.addCollider(ChestMan);

		//BasicEnemy.addCollider(ChestMan);

	}

	createLegMan() {
		return new LegMan(this, 100, 250);
	}

	createChestMan() {
		return new ChestMan(this, 100, 10);
	}

	createBasicEnemies(spawnLayer) {

		return spawnLayer.objects.map(spawnPoint => {
			return new BasicEnemy(this, spawnPoint.x, spawnPoint.y);
		})

		
	}

	createMap() {
		const map = this.make.tilemap({key: 'map'});
		map.addTilesetImage('main_lev_build_1', 'tiles-1');
		return map;
	}

	createLayers(map) {
		const tileset = map.getTileset('main_lev_build_1');
		const platforms = map.createStaticLayer('platforms', tileset);
		const enemySpawns = map.getObjectLayer('enemy_spawns');

		platforms.setCollisionByExclusion(-1);

		return { platforms, enemySpawns };
	}
}

export default Play;