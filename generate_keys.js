const fs = require("fs")

function genKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let key = "7z-"
  for (let i = 0; i < 7; i++) {
    key += chars[Math.floor(Math.random() * chars.length)]
  }
  return key
}

let keys = []
for (let i = 0; i < 500; i++) {
  keys.push(genKey())
}

const data = {
  expires: Math.floor(Date.now() / 1000) + (3 * 24 * 60 * 60),
  keys: keys
}

fs.writeFileSync("keys.json", JSON.stringify(data, null, 2))
