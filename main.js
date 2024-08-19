

document.querySelector('#app').innerHTML = `
   <div id="main">
        <a href="https://github.com/abin-karukappallil"><img class="guthub" style="" src="/github-mark.svg" ></a>
        <div id="heading" class="heading">
            <h1><a href="/">TRACK MY BUS</a></h1>
        </div>
    <div id="submain" class="submain">
       
    <div class="form">
        <form id="infoss">
            <label for="Number">Enter vehicle number</label>
            <input value="KL38F4711" id="Number" name="Number" type="text">
            <button id="submit" type="submit">GO</button>
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
   <footer></footer>
    </div>
    <div class="threeD" id="3D"></div>
`
