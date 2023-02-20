import './style.css'
import { generateImage } from "./generate"
const app = document.querySelector('#app') as HTMLDivElement
const imageInput = document.getElementById("image") as HTMLInputElement

const generateUnicornio = (url: string) => {
  document.body.style.backgroundImage = "url("+ url +")";
  app.children[0].children[0].getElementsByTagName("input")[0].style.backgroundImage = "url("+ url +")";
}

document.querySelector<HTMLFormElement>("form")!.addEventListener('submit', async (e: Event) => {
  e.preventDefault()
  const imageView = app.children[0].children[1].getElementsByTagName("img")[0] as HTMLImageElement
  const h1 = app.children[0].children[1].getElementsByTagName("h1")[0]
  if (imageView) imageView.style.display = "none"
  h1.innerHTML = `Gerando imagem: ${imageInput.value}...`
  h1.style.display = "block"
  const imageGenerate = await generateImage(imageInput.value)
  if (imageGenerate) {
    if (imageInput.value.trim().includes("unicornio")) generateUnicornio(imageGenerate)
    if (imageView) {
      imageView.setAttribute("src", imageGenerate)
      imageView.style.display = "block"
    } else {
      const img = document.createElement("img")
      img.setAttribute("src", imageGenerate)
      app.children[0].children[1].append(img)
    }
    h1.style.display = "none"
  }
})