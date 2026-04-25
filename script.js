function showInfo(type) {
    const data = {
        evaporation: ["蒸發", "水變成水蒸氣上升，是水循環的開始。"],
        condensation: ["凝結", "水蒸氣冷卻形成雲。"],
        precipitation: ["降水", "水從雲中落下形成雨或雪。"],
        runoff: ["地表逕流", "水沿地表流動回到海洋。"],
        infiltration: ["滲透", "水滲入地下形成地下水。"]
    };

    document.getElementById("infoTitle").innerText = data[type][0];
    document.getElementById("infoText").innerText = data[type][1];
    document.getElementById("infoBox").style.display = "block";
}

function closeInfo() {
    document.getElementById("infoBox").style.display = "none";
}