import constants from '$lib/constants.json';

const message =
	'Olá, gostaria de mais informações sobre a Subimersa e o curso completo de pesca subaquática em apneia!';

const phoneNumber = constants.whatsapp;

export function openWhatsApp(): void {
	const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
	window.open(url, '_blank');
}
