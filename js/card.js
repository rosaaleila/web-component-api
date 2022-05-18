'use strict'

import { readStudents, getTags } from './students.js'

class card extends HTMLElement {
    constructor() {
        super();
        this.build()
    }

    build() {
        const shadow = this.attachShadow({ mode: 'open' })
        shadow.appendChild(this.style())
        shadow.appendChild(this.createCard())
    }

    style() {
        const style = document.createElement('style')
        style.textContent = `
            .card {
                width: 250px;
                height: 250px;
                background-color: cadetblue;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
            
            .card-text {
                width: 50%;
                padding: 4px;
                text-align: center;
                text-transform: capitalize;
                font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
                color: white;
                border-radius: 9px;
                box-shadow: 0 0 3px black;
            }
            
            .card-image {
                background-image: url(../img/avatar.jpg);
                background-size: cover;
                height: 50%;
                width: 50%;
                border-radius: 50%;
                box-shadow: inset 0 0 8px black;
            }
        `

        return style
    }

    createCard() {

        const aluno = this.dataaluno()
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <div class="card-text" id="card-name">${aluno[0]}</div>
            <div class="card-image"></div>
            <div class="card-text" id="card-class">${aluno[1]}</div>
            `
                
            return card
 

    }


    dataaluno() {
        const alunoprovisorio = ["Aluno", "Sem sala", "avatar"]
        const aluno = this.getAttribute('data-aluno')
        
        if (aluno != null) {
            const info = aluno.split(',')
            return info 
        } else 
            return alunoprovisorio

    } 
}

customElements.define('card-aluno', card)
