# serbianTransliteration

[![Build Status](https://travis-ci.org/dimadin/serbianTransliteration.svg?branch=master)](https://travis-ci.org/dimadin/serbianTransliteration)

serbianTransliteration is a simple bidirectional Serbian language JavaScript transliterator. In other words, it can transliterate string from Latin to Cyrillic or from Cyrillic to Latin.


## Installation

### NPM

```sh
npm install serbian-transliteration
```

### CDN

```html
<script src="https://unpkg.com/serbian-transliteration@1.0.0/dist/serbian-transliteration.min.js"></script>
```

## Usage

If you want to transliterate string to Latin:
```javascript
string = serbianTransliteration.toLatin( string );
```

If you want to transliterate string to Cyrillic:
```javascript
string = serbianTransliteration.toCyrillic( string );
```

## License

[Unlicense](https://unlicence.org/)
