# Build text animation

This is wery simple text animation for your website.

The best effect is when you use a monospace font

```dart
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Build text animation</title>
        <style>
            .content{
                width: 100%;
                height: 70vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .content h1{
                font-family: monospace;
                font-size: 3em;
            }
        </style>
    </head>
    <body>
        <div class="content">
            <h1>The website is under construction</h1>
        </div>
        <script src="./build-text-animation.js"></script>
        <script>
            const options = {
                min: 1, // minimum change chars              / default = 1
                max: 4, // maximium change chars             / default = 3
                changes: 20, // maximum changes on once time / default = 20
                time: 70, //waiting for change               / default = 70
                color: 'green', //color changed char         / default = 'green'
            } // all options is optional

            startBuildAnim(document.querySelector('h1'), options) // options is optional
        </script>
    </body>

</html>
```