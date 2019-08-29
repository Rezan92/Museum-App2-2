function  submitComment(){
  // console.log("hello")
  const inputField = document.getElementById("name")
  const textArea = document.getElementById("msg")
  // console.log(message)
  const name = inputField.value 
  // console.log(name)
  const msg = textArea.value
  const comment = document.createElement('section')
  // console.log("MESSAGE",msg)
  const h3 = document.createElement('h3')
  const p = document.createElement('p')
  comment.classList.add("comment")
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.appendChild(h3)
  comment.appendChild(p)
  console.log("COMMENT",comment)
  // console.log(h3)
  // console.log(comment)

}
submitComment()