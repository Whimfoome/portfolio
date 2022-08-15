import imWom from '$lib/assets/project-wom.gif';
import imFps from '$lib/assets/project-fps.png';
import imInvSys from '$lib/assets/project-invsys.png';
import imFmanime from '$lib/assets/project-fmanime.gif';
import imGnomeSwitcher from '$lib/assets/project-gnomeswitch.png';

export const prWom: IProject = {
	name: 'World of Monkeys (WIP)',
	image: imWom,
	link: ''
};

export const prFps: IProject = {
	name: 'First Person Starter',
	image: imFps,
	link: 'https://github.com/Whimfoome/godot-FirstPersonStarter'
};

export const prInvSys: IProject = {
	name: 'Dynamic Inventory System',
	image: imInvSys,
	link: 'https://github.com/Whimfoome/godot-InventorySystem'
};

export const prFmanime: IProject = {
	name: 'Fmanime',
	image: imFmanime,
	link: 'https://github.com/Whimfoome/fmanime',
	vertical: true
};

export const prGnomeSwitcher: IProject = {
	name: 'GNOME Switcher',
	image: imGnomeSwitcher,
	link: 'https://github.com/Whimfoome/better_dexp'
};

interface IProject {
	name: string;
	image: string;
	link: string;
	vertical?: boolean;
}
