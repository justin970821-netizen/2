function showInfo(type) {
    const box = document.getElementById("infoBox");
    const title = document.getElementById("infoTitle");
    const text = document.getElementById("infoText");

    const data = {
        evaporation: {
            title: "蒸發 (Evaporation)",
            text: "水從海洋、湖泊或河流變成水蒸氣上升，是水循環的起點。"
        },
        condensation: {
            title: "凝結 (Condensation)",
            text: "水蒸氣在高空冷卻形成雲。"
        },
        precipitation: {
            title: "降水 (Precipitation)",
            text: "雲中的水滴變重後以雨、雪或冰雹形式落下。"
        },
        runoff: {
            title: "地表逕流 (Runoff)",
            text: "雨水在地表流動，形成河流並回到海洋。"
        },
        infiltration: {
            title: "滲透 (Infiltration)",
            text: "水滲入土壤，成為地下水。"
        }
    };

    title.innerText = data[type].title;
    text.innerText = data[type].text;

    box.style.display = "block";
}

function closeInfo() {
    document.getElementById("infoBox").style.display = "none";
}