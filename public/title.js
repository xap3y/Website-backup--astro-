const title = "XAP3Y"
$(document).ready(async () => {
    thread()
    for (let i = 0; i <= "XAP3X".length; i++) {
        $("#h1Name").text($("#h1Name").text() + "XAP3X".charAt(i))
        await sleep(120);
    }
    await sleep(180);
    $("#h1Name").text("XAP3")
    await sleep(100);
    $("#h1Name").text("XAP3Y")
})

async function thread() {
    await sleep(500);
    while(true){
        for (let i = 1; i < title.length; i++) {
            //console.log("XD: " + result)
            document.title = "@" + title.slice(0, -i);
            await sleep(250);
        }
        document.title = "@"
        await sleep(200);
        document.title = "@XAP3Y"
        await sleep(200);
        document.title = "@";
        await sleep(200);
        document.title = "@"
        for (let i = 0; i <= title.length; i++) {
            document.title += title.charAt(i);
            await sleep(250);
        }
        await sleep(400);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}