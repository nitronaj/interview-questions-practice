

export function wrap(s: string, w: number):string {
	if (w >= s.length) {
		return s;
	}

	let spaceIndex = s.lastIndexOf(' ', w)
	if (spaceIndex === -1) {
		spaceIndex = w
	}

	return s.slice(0, spaceIndex).trim() + '\n' + wrap(s.slice(spaceIndex).trim(), w)

}
