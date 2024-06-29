
const url = "https://api.waifu.im/search"
const waifuImg = document.getElementById("waifu")
const errorImg = document.getElementById("error_img")


function getWaifu() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      try {
        waifuImg.src = json.images[0].url
        errorImg.hidden = true
      }
      catch (err) {
        errorImg.hidden = false
      }
    })
}

getWaifu()

document.getElementById("get-waifu").onclick = getWaifu