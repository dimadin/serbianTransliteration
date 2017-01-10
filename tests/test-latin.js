// Require test runner
var test = require( 'tape' );

// Require serbianTransiteration library
var s = require( '..' );

test( 'latin_inputs', function( t ) {
	t.plan( 8 );

	t.equal( s.toLatin( 'milan' ), 'milan' );
	t.equal( s.toLatin( 'pera' ), 'pera' );
	t.equal( s.toLatin( 'TUNISOVCI' ), 'TUNISOVCI' );
	t.equal( s.toLatin( 'LIKOVI' ), 'LIKOVI' );
	t.equal( s.toLatin( 'Ilija' ), 'Ilija' );
	t.equal( s.toLatin( 'bigPinTheMiddle' ), 'bigPinTheMiddle' );
	t.equal( s.toLatin( 'Čivijaši' ), 'Čivijaši' );
	t.equal( s.toLatin( 'eXtreme' ), 'eXtreme' );
} );

test( 'cyrillic_inputs', function( t ) {
	t.plan( 6 );

	t.equal( s.toLatin( 'лудило' ), 'ludilo' );
	t.equal( s.toLatin( 'рзава' ), 'rzava' );
	t.equal( s.toLatin( 'Тврђава' ), 'Tvrđava' );
	t.equal( s.toLatin( 'Милијаш' ), 'Milijaš' );
	t.equal( s.toLatin( 'врло опасно' ), 'vrlo opasno' );
	t.equal( s.toLatin( 'А шта да радим?' ), 'A šta da radim?' );
} );

test( 'mixed_scripts_inputs', function( t ) {
	t.plan( 3 );

	t.equal( s.toLatin( 'biliЈАР' ), 'biliJAR' );
	t.equal( s.toLatin( 'КuГlА' ), 'KuGlA' );
	t.equal( s.toLatin( 'НОСiti' ), 'NOSiti' );
} );

test( 'non_serbian_inputs', function( t ) {
	t.plan( 3 );

	t.equal( s.toLatin( 'QWERTY' ), 'QWERTY' );
	t.equal( s.toLatin( 'Досије икс (X Files)' ), 'Dosije iks (X Files)' );
	t.equal( s.toLatin( 'Здесь вы можете скачать свежие версии WordPress, почерпнуть полезную информацию из Кодекса или получить помощь на форуме поддержки. Подпишитесь на ленту проекта, чтобы быть в курсе событий.' ), 'Zdesь vы možete skačatь svežie versii WordPress, počerpnutь poleznuю informaciю iz Kodeksa ili polučitь pomoщь na forume podderžki. Podpišitesь na lentu proekta, čtobы bыtь v kurse sobыtiй.' );
} );

test( 'sentences_inputs', function( t ) {
	t.plan( 4 );

	t.equal( s.toLatin( 'Насупрот веровању, Lorem Ipsum није насумично изабран и сложен текст.' ), 'Nasuprot verovanju, Lorem Ipsum nije nasumično izabran i složen tekst.' );
	t.equal( s.toLatin( 'Његови корени потичу у делу класичне Латинске књижевности од 45. године пре нове ере, што га чини старим преко 2000 година.' ), 'Njegovi koreni potiču u delu klasične Latinske književnosti od 45. godine pre nove ere, što ga čini starim preko 2000 godina.' );
	t.equal( s.toLatin( 'Richard McClintock, професор латинског на Hampden-Sydney колеџу у Вирџинији, је потражио дефиницију помало чудне речи "consectetur" из Lorem Ipsum пасуса и анализирајући делове речи у класичној књижевности отркио аутентичан извор.' ), 'Richard McClintock, profesor latinskog na Hampden-Sydney koledžu u Virdžiniji, je potražio definiciju pomalo čudne reči "consectetur" iz Lorem Ipsum pasusa i analizirajući delove reči u klasičnoj književnosti otrkio autentičan izvor.' );
	t.equal( s.toLatin( 'Lorem Ipsum долази из поглавља 1.10.32 и 1.10.33 књиге "de Finibus Bonorum et Malorum" (Екстреми Бога и Зла) коју је написао Cicerо 45. године пре нове ере.' ), 'Lorem Ipsum dolazi iz poglavlja 1.10.32 i 1.10.33 knjige "de Finibus Bonorum et Malorum" (Ekstremi Boga i Zla) koju je napisao Cicero 45. godine pre nove ere.' );
} );
