/**
 * serbianTransliteration
 *
 * @description Bidirectional Serbian language JavaScript transliterator.
 * @version     1.0.0
 * @author      Milan Dinić <blog.milandinic.com>
 */
( function( root, factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory );
	} else if ( typeof module === 'object' && module.exports ) {
		// Node and CommonJS-like environments
		module.exports = factory();
	} else {
		// Browser global (root is window)
		root.serbianTransliteration = factory();
	}
} ( this, function() {
	var start, end, regex,
	// Digraphs must be before all other letters because of Latin to Cyrillic transliteration
	cyrillic = [
		'Љ',
		'Љ',
		'Њ',
		'Њ',
		'Џ',
		'Џ',
		'А',
		'Б',
		'В',
		'Г',
		'Д',
		'Ђ',
		'Е',
		'Ж',
		'З',
		'И',
		'Ј',
		'К',
		'Л',
		'М',
		'Н',
		'О',
		'П',
		'Р',
		'С',
		'Т',
		'Ћ',
		'У',
		'Ф',
		'Х',
		'Ц',
		'Ч',
		'Ш',
		'љ',
		'њ',
		'џ',
		'а',
		'б',
		'в',
		'г',
		'д',
		'ђ',
		'е',
		'ж',
		'з',
		'и',
		'ј',
		'к',
		'л',
		'м',
		'н',
		'о',
		'п',
		'р',
		'с',
		'т',
		'ћ',
		'у',
		'ф',
		'х',
		'ц',
		'ч',
		'ш'
	],
	latin = [
		'Lj',
		'LJ',
		'Nj',
		'NJ',
		'Dž',
		'DŽ',
		'A',
		'B',
		'V',
		'G',
		'D',
		'Đ',
		'E',
		'Ž',
		'Z',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'R',
		'S',
		'T',
		'Ć',
		'U',
		'F',
		'H',
		'C',
		'Č',
		'Š',
		'lj',
		'nj',
		'dž',
		'a',
		'b',
		'v',
		'g',
		'd',
		'đ',
		'e',
		'ž',
		'z',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'r',
		's',
		't',
		'ć',
		'u',
		'f',
		'h',
		'c',
		'č',
		'š'
	];

	/**
	 * Transliterate string from one script to another.
	 * @param  {string} string String to transliterate.
	 * @return {string}        Transliterated string.
	 */
	var convert = function( string ) {
		// Loop through each letter in starting script
		for ( index = 0; index < start.length; ++index ) {
			regex = new RegExp( start[index], "g" );
			// Replace letter with matching one from ending script
			string = string.replace( regex, end[index] );
		}

		return string;
	};

	return {
		/**
		 * Transliterate string to Latin script.
		 * @param  {string} original String to transliterate.
		 * @return {string}          Transliterated string.
		 */
		toLatin: function( original ) {
			start = cyrillic;
			end   = latin;

			return convert( original );
		},
		/**
		 * Transliterate string to Cyrillic script.
		 * @param  {string} original String to transliterate.
		 * @return {string}          Transliterated string.
		 */
		toCyrillic: function( original ) {
			start = latin;
			end   = cyrillic;

			return convert( original );
		}
	}
} ) );
