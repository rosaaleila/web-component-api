'use strict'

const url = "https://testeleonid.herokuapp.com/alunos"

const readStudents = async () => {
    const response = await fetch(url)
    return await response.json()
}

const getTags = async () => {
    const cards = document.getElementsByTagName('card-aluno')
    const aluno = await readStudents()

    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('data-aluno', `${aluno[i].nome},${aluno[i].turma},${aluno[i].status},${aluno[i].foto}`)
    }

}

getTags()

export { readStudents, getTags }