# _notify
Simple fixed notification box build on bootstrap alerts. This library registers a global function ```_notify``` which accepts 3 values ($message, $duration, $type). $type will be converted into the color class, options are: 'success', 'info', 'warning', 'danger'. See below for an example.

## Usage:
```javascript
_notify('Enter a message here', 3000, 'success');
```