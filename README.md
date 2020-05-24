# gmail-check
Check gmail existence.

This gmail-check library provides the way to know the existence of gmail mailbox written in server-side JavaScript.

###Installation
Install the package with:
```
npm install gmail-check
```
### Include 
```javascript
var gmailCheck = require('gmail-check');
```

### Example Using async/await
```javascript

let result = await gmailCheck("abc@xyz.com"); // gmail address to test
console.log(result)  ///// status : "success" (if exists) || status : "failed" (if doesn't exists)
-- Do Something --
```

---
### Submit Queries
You can e-mail an issue/query at amansharma5@hotmail.com