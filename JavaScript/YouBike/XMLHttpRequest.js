// 程式碼寫這裡
const API =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

const req = new XMLHttpRequest();
req.addEventListener("load", (e) => {
  console.log("載入完畢");
  let resp = JSON.parse(req.responseText);
  //   console.log(resp);
  resp.forEach((site) => {
    console.log(site.sna);
  });
});
req.open("GET", API);
req.send();
