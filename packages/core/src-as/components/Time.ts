import { ObjectBase } from '../base'


export class Time extends ObjectBase{
	start: f32
	last: f32
	elapsed: f32
	now: f32
	delta: f32
	frame: u64
}