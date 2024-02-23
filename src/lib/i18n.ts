import { derived, writable } from 'svelte/store';
import translations from './translations';

export const locale = writable('si');
export const locales = [
	{ id: 'en', name: 'English' },
	{ id: 'si', name: 'සිංහල' },
	{ id: 'ta', name: 'தமிழ்' }
];

function translate(locale: string, key: string, vars) {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${key}"`);

	// Grab the translation from the translations object.
	let text = translations[key][locale];

	if (!text) {
		text = translations[key]['en'];
	}

	// Replace any passed in variables in the translation string.
	Object.keys(vars).map((k) => {
		const regex = new RegExp(`{{${k}}}`, 'g');
		text = text.replace(regex, vars[k]);
	});

	return text;
}

export const t = derived(
	locale,
	($locale) =>
		(key, vars = {}) =>
			translate($locale, key, vars)
);
