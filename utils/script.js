const username = document.getElementById("nombre")
const lastname = document.getElementById("apellido")
const selected = document.getElementById("curso")

const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    e.preventDefault()
    e.stopPropagation()
    alert( `-- Atencion -- \n Se ha reservado una plaza para el usuario ${username.value} ${lastname.value} para el curso de ${selected.value} `)
})
