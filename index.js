const DELAY_MS = 1000

const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms)
})

const write = (element, value) => {
  const child = document.createElement("div")
  child.innerHTML = value
  element.appendChild(child)
}

const main = async (element) => {
  write(element, "start")

  let before = new Date()

  for (let idx = 0; idx < 60; ++idx) {
    await delay(DELAY_MS)

    const now = new Date()
    const differenceMs = now - before
    before = now

    if (differenceMs > DELAY_MS * 1.5) {
      write(element, `${idx + 1}: ${differenceMs}`)
    }
  }

  write(element, "finish")
}

main(document.getElementById("app"))
