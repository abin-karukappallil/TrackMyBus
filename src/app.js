export function render() {
  const html = `
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>TrackMyBus</title>
    <link rel="icon" type="image/x-icon" href="/models/logo.png">
    <link href="index.css" rel="stylesheet">
</head>
<body>
    <div id="main">
        <a href="https://github.com/abin-karukappallil"><img src="../public/github-mark.svg" style="
            position: absolute;
            left: 21px;
            top: 23px;
            margin: 2px;
            height: 50px;
        "></a>
        <div id="heading" class="heading">
            <h1><a href="/">TRACK MY BUS</a></h1>
        </div>
    <div id="submain" class="submain">
       
    <div class="form">
        <form id="infoss">
            <label for="Number">Enter vehicle number</label>
            <input id="Number" name="Number" type="text">
            <button id="submit" type="submit">submit</button>
        </form>
    </div>
</div>
    <div class="data">
        <div id="time" class="time">
            
            </div>
        </div>
        <div class="disclaimer">
            <h3>Disclaimer: The TrackMyBus app provides time information based on permit details for buses. Please be aware that this information is subject to change and may not always be accurate. We recommend verifying the information through additional sources to ensure its correctness. The app is not responsible for any discrepancies or inaccuracies in the provided times.</h3> 
         </div>
    </div>
   
    </div>
    <div id="3D"></div>

    <script type="module" src="/main.js"></script>
    <script type="module" src="/api.js"></script>
</body>
</html>
  `
  return { html }
}
