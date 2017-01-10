// Require test runner
var test = require( 'tape' );

// Require serbianTransiteration library
var s = require( '..' );

test( 'cyrillic_inputs', function( t ) {
	t.plan( 6 );

	t.equal( s.toCyrillic( 'стевица' ), 'стевица' );
	t.equal( s.toCyrillic( 'поеска' ), 'поеска' );
	t.equal( s.toCyrillic( 'ТРУСНО' ), 'ТРУСНО' );
	t.equal( s.toCyrillic( 'МИЛИЈАРДЕРИ' ), 'МИЛИЈАРДЕРИ' );
	t.equal( s.toCyrillic( 'Павле' ), 'Павле' );
	t.equal( s.toCyrillic( 'великоТпаМалеП' ), 'великоТпаМалеП' );
} );

test( 'cyrillic_inputs', function( t ) {
	t.plan( 8 );

	t.equal( s.toCyrillic( 'pomešana osećanja' ), 'помешана осећања' );
	t.equal( s.toCyrillic( 'Đurađ Branković' ), 'Ђурађ Бранковић' );
	t.equal( s.toCyrillic( 'područje' ), 'подручје' );
	t.equal( s.toCyrillic( 'obilno' ), 'обилно' );
	t.equal( s.toCyrillic( 'Plava je boja neba.' ), 'Плава је боја неба.' );
	t.equal( s.toCyrillic( 'Ljuljaška se zaljuljala!' ), 'Љуљашка се заљуљала!' );
	t.equal( s.toCyrillic( 'Džak' ), 'Џак' );
	t.equal( s.toCyrillic( 'Narandža' ), 'Наранџа' );
} );

test( 'latin_diagraphs_inputs', function( t ) {
	t.plan( 12 );

	t.equal( s.toCyrillic( 'Đorđe' ), 'Ђорђе' );
	t.equal( s.toCyrillic( 'Djordje' ), 'Дјордје' );
	t.equal( s.toCyrillic( 'DJordje' ), 'ДЈордје' );
	t.equal( s.toCyrillic( 'Ljiljana' ), 'Љиљана' );
	t.equal( s.toCyrillic( 'LJubičasta' ), 'Љубичаста' );
	t.equal( s.toCyrillic( 'lJulj' ), 'лЈуљ' );
	t.equal( s.toCyrillic( 'Džandrljav' ), 'Џандрљав' );
	t.equal( s.toCyrillic( 'DŽivdžan' ), 'Џивџан' );
	t.equal( s.toCyrillic( 'dŽambas' ), 'дЖамбас' );
	t.equal( s.toCyrillic( 'Njiva' ), 'Њива' );
	t.equal( s.toCyrillic( 'NJuška' ), 'Њушка' );
	t.equal( s.toCyrillic( 'nJegoš' ), 'нЈегош' );
} );

test( 'latin_special_serbian_inputs', function( t ) {
	t.plan( 3 );

	t.equal( s.toCyrillic( 'Čučavac' ), 'Чучавац' );
	t.equal( s.toCyrillic( 'Ćevabdžinica' ), 'Ћевабџиница' );
	t.equal( s.toCyrillic( 'Šuškavac' ), 'Шушкавац' );
} );

test( 'mixed_scripts_inputs', function( t ) {
	t.plan( 3 );

	t.equal( s.toCyrillic( 'jeloВНИК' ), 'јелоВНИК' );
	t.equal( s.toCyrillic( 'БuДaЛa' ), 'БуДаЛа' );
	t.equal( s.toCyrillic( 'МЕРiti' ), 'МЕРити' );
} );

test( 'non_serbian_inputs', function( t ) {
	t.plan( 7 );

	t.equal( s.toCyrillic( 'XYQ' ), 'XYQ' );
	t.equal( s.toCyrillic( 'www.primer.net' ), 'www.пример.нет' );
	t.equal( s.toCyrillic( 'Über 60 Millionen Menschen haben WordPress als Grundstein für den Ort gewählt, den sie im Web Home nennen. Wir freuen uns, dich in dieser großen Familie zu begrüßen!' ), 'Üбер 60 Миллионен Менсцхен хабен WордПресс алс Грундстеин фüр ден Орт геwäхлт, ден сие им Wеб Хоме неннен. Wир фреуен унс, дицх ин диесер гроßен Фамилие зу бегрüßен!' );
	t.equal( s.toCyrillic( 'WordPress — идеальная платформа для публикации, ориентированная на красоту, поддержку стандартов и удобство использования. WordPress бесплатен и свободен к распространению.' ), 'WордПресс — идеальная платформа для публикации, ориентированная на красоту, поддержку стандартов и удобство использования. WордПресс бесплатен и свободен к распространению.' );
	t.equal( s.toCyrillic( 'WordPress (ワードプレス) は、オープンソースのブログ／CMS プラットフォームです。セマンティック Web、コードやデザインの美しさ、Web 標準、ユーザビリティなどを意識して開発されており、無料でダウンロードして使うことができます。' ), 'WордПресс (ワードプレス) は、オープンソースのブログ／ЦМС プラットフォームです。セマンティック Wеб、コードやデザインの美しさ、Wеб 標準、ユーザビリティなどを意識して開発されており、無料でダウンロードして使うことができます。' );
	t.equal( s.toCyrillic( '`1234567890-=[]\;,./' ), '`1234567890-=[]\;,./' );
	t.equal( s.toCyrillic( '~!@#$%^&*()_+{}|:<>?' ), '~!@#$%^&*()_+{}|:<>?' );
} );

test( 'sentences_inputs', function( t ) {
	t.plan( 4 );

	t.equal( s.toCyrillic( 'Lorem Ipsum je jednostavno model teksta koji se koristi u štamparskoj i slovoslagačkoj industriji.' ), 'Лорем Ипсум је једноставно модел текста који се користи у штампарској и словослагачкој индустрији.' );
	t.equal( s.toCyrillic( 'Lorem Ipsum je bio standard za model teksta još od 1500. godine, kada je nepoznati štampar uzeo kutiju sa slovima i složio ih kako bi napravio uzorak knjige.' ), 'Лорем Ипсум је био стандард за модел текста још од 1500. године, када је непознати штампар узео кутију са словима и сложио их како би направио узорак књиге.' );
	t.equal( s.toCyrillic( 'Ne samo što je ovaj model opstao pet vekova, nego je čak počeo da se koristi i u elektronskim medijima, nepromenivši se.' ), 'Не само што је овај модел опстао пет векова, него је чак почео да се користи и у електронским медијима, непроменивши се.' );
	t.equal( s.toCyrillic( 'Popularizovan je šezdesetih godina dvadesetog veka zajedno sa listovima leterseta koji su sadržali Lorem Ipsum pasuse, a danas sa softverskim paketom za prelom kao što je Aldus PageMaker koji je sadržao Lorem Ipsum verzije.' ), 'Популаризован је шездесетих година двадесетог века заједно са листовима летерсета који су садржали Лорем Ипсум пасусе, а данас са софтверским пакетом за прелом као што је Алдус ПагеМакер који је садржао Лорем Ипсум верзије.' );
} );
