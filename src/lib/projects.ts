import imWom from '$lib/assets/project-wom.webm';
import imFps from '$lib/assets/project-fps.webp';
import imInvSys from '$lib/assets/project-invsys.webp';
import imToneShift from '$lib/assets/project-toneshift.webp';
import imSwiftMarket from '$lib/assets/project-swiftmarket.webm';
import imFmanime from '$lib/assets/project-fmanime.webm';
import imSimpleFileConverter from '$lib/assets/project-simplefileconverter.webp';
import imGnomeSwitcher from '$lib/assets/project-gnomeswitch.webp';

export const prWom: IProject = {
	name: 'World of Monkeys',
	media: imWom,
	link: '',
	isVideo: true
};

export const prFps: IProject = {
	name: 'First Person Starter',
	media: imFps,
	link: 'https://github.com/Whimfoome/godot-FirstPersonStarter',
	github: 'https://github.com/Whimfoome/godot-FirstPersonStarter'
};

export const prInvSys: IProject = {
	name: 'Dynamic Inventory System',
	media: imInvSys,
	link: 'https://github.com/Whimfoome/godot-InventorySystem',
	github: 'https://github.com/Whimfoome/godot-InventorySystem'
};

export const prToneShift: IProject = {
	name: 'ToneShift',
	media: imToneShift,
	link: 'https://www.toneshift.cc/'
};

export const prSwiftMarket: IProject = {
	name: 'SwiftMarket',
	media: imSwiftMarket,
	link: 'https://github.com/SwiftMarket',
	isVideo: true,
	github: 'https://github.com/SwiftMarket/swiftmarket-sveltekit'
};

export const prFmanime: IProject = {
	name: 'Fmanime',
	media: imFmanime,
	link: 'https://github.com/Whimfoome/fmanime',
	github: 'https://github.com/Whimfoome/fmanime',
	vertical: true,
	isVideo: true
};

export const prSimpleFileConverter: IProject = {
	name: 'simple-file-converter',
	media: imSimpleFileConverter,
	link: 'https://whimfoome.gumroad.com/l/simple-file-converter'
};

export const prGnomeSwitcher: IProject = {
	name: 'GNOME Switcher',
	media: imGnomeSwitcher,
	link: 'https://github.com/Whimfoome/better_dexp',
	github: 'https://github.com/Whimfoome/better_dexp'
};

interface IProject {
	name: string;
	media: string;
	link: string;
	vertical?: boolean;
	github?: string;
	isVideo?: boolean;
}
