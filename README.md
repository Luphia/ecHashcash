# ecHashcash
An easy way to generate and verify hashcash

## Install
```shell
npm install echashcash
```
## Use
### Generate Hashcash
```node
const echashcash = require('echashcash');

/* with default level (3)  */
var content = 'some content';
echashcash(content);

/* with custom level  */
var content = 'some content';
var level = 5;
echashcash(content, level);

/* with custom token (HEX)  */
var content = 'some content';
var token = 'bb8';
echashcash(content, token);
```
### Verify Hashcash
```node
const echashcash = require('echashcash');

/* with default level (3)  */
var content = 'some content';
var hashcash = 2375
echashcash.check(content, hashcash);

/* with custom level  */
var content = 'some content';
var level = 5;
var hashcash = 383173;
echashcash.check(content, hashcash, level);

/* with custom token (HEX)  */
var content = 'some content';
var token = 'bb8';
var hashcash = 873;
echashcash.check(content, hashcash, token);
```
