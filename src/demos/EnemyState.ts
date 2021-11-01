import State from "../Wolfie2D/DataTypes/State/State";
import StateMachine from "../Wolfie2D/DataTypes/State/StateMachine";
import GameEvent from "../Wolfie2D/Events/GameEvent";
import GameNode from "../Wolfie2D/Nodes/GameNode";
import EnemyGoapController from "./EnemyGoapController";

export default abstract class EnemyState extends State{
    owner: GameNode;
	gravity: number = 1000;
	parent: EnemyGoapController;

	constructor(parent: StateMachine, owner: GameNode){
		super(parent);
		
		this.owner = owner;
	}

	handleInput(event: GameEvent): void {}

	update(deltaT: number): void {

	}
}