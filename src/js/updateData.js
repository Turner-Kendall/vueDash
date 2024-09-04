export function updateData () {
	const n = Math.floor(Math.random() * 10)
	switch (n) {
		case 1:
			rating.value++;
			risk.value--;
			break;
		case 2:
			rating.value--;
			risk.value++;
			break;
		case 3:
			rating.value -= 4;
			risk.value += 3
			break;
		case 4:
			risk.value -= 2;
			rating.value += 3
			break;
		case 5:
			rating.value -= 4;
			risk.value += 2
			break;
		case 6:
			rating.value += 3;
			risk.value += 3;
			break;
		case 7:
			rating.value -= 4;
			risk.value -= 4
			break;
		default:
			rating.value++;
			risk.value--;
			break;
	}
}