//import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
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
            <input value="KL35F9511" id="Number" name="Number" type="text">
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
    <div class="threeD" id="3D"></div>
`