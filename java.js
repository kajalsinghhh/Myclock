
var setTime = () => {
    var d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    // display.innerHTML = `${h == 12 ? 12 : h % 12} :${s} ${h >=12 ? "PM" : "AM"}`
    hr.style.transform = `rotate(${(h == 12 ? 12 : h % 12) * 30 + Math.floor(m/16)*6}deg)`;
    mn.style.transform = `rotate(${ m*6}deg)`;
    sc.style.transform = `rotate(${ s*6}deg)`;
}
{
setInterval(setTime ,1000);
}