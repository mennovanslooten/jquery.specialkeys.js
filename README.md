# jquery.specialkeys.js

## What is this?

It's a plugin for jQuery that extends the standard events so you can do this:

```javascript
$('.some-selector').on('enterkey', function(e) {
    // the user pressed the enter key
});
```
or even this:

```javascript
$('.some-selector').on('shift_downkey', function(e) {
    // the user pressed shift+down
});
```

The following new key names have supported events (both `**[name]**key` as well as `shift_**[name]**key`):

- backspace
- delete
- left
- up
- right
- down
- tab
- enter
- space
- escape
- esc


