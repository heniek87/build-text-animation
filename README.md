# Build text animation

This is wery simple text animation for your website.

The best effect is when you use a monospace font

```dart
<script src="./build-text-animation.js"></script>
        <h1 >The website is under construction</h1>
        
        <script>
            const options = {
                min: 1, // minimum change chars              / default = 1
                max: 4, // maximium change chars             / default = 3
                changes: 20, // maximum changes on once time / default = 20
                time: 70, //waiting for change               / default = 70
                color: 'green', //color changed char         / default = 'green'
            } // all options is optional
            document.querySelector('h1').startBuildAnim(options)// options is optional
            
        </script>
```
