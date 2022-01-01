
const Main = {

  init: function() {
    this.cacheSelectors()
    this.bindEvents()
  },

  // seleciona e armazena os eventos
  cacheSelectors: function() { 
    this.$checkButtons = document.querySelectorAll('.check') 
    this.$inputTask = document.querySelector('#inputTask')
    this.$list = document.querySelector('#list')
    this.$removeButtons = document.querySelectorAll('.remove')
  },

  // eventos de atividade, como cliques...
  bindEvents: function(){
    const self = this 
    // para que o button.onclick abaixo funcione

    this.$checkButtons.forEach(function(button){
      button.onclick = self.Events.checkButton_click
    })

    this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this)

    this.$removeButtons.forEach(function(button){
      button.onclick = self.Events.removeButton_click
    })
  },

  // funções relacionadas aos eventos by me
  Events: {
    checkButton_click: function(e){
      const li = e.target.parentElement

      li.classList.toggle('done')
      li.classList.toggle('task')
    },

    inputTask_keypress: function(e){
      const key = e.key
      const value = e.target.value

      if (key === 'Enter') {
        this.$list.innerHTML += `
          <li>
            <div class="check"></div>
            <label clas="task">
              ${value}
            </label>
            <button class="remove"></button>
          </li>
        `

        e.target.value = ''

        this.cacheSelectors()
        this.bindEvents()
      }
    },

    removeButton_click: function(e){
      let li = e.target.parentElement

      li.classList.add('hidden')

      /* li.classList.add('removed')

      setTimeout(function(){
        li.classList.add('hidden')
      }, 300) */
    }
  }
}

Main.init() 
// para executar a função

// funções relacionadas a eventos - By Thiago
  /* Events: {
    checkButton_click: function(e) {
      const li = e.target.parentElement
      const itsDone = li.classList.contains('done')

      if (!itsDone) {
        return li.classList.add('done')
      }
      li.classList.remove('done')
    }
  }, */



// this. coloca a variável no main para ficar disponível em outras funções.. se usasse o let, só poderia utilizar-lo na função atual

// .bind(this) para conectar o this com o inputTask_keypress e funcionar na função do evento

// e.target.value = '' para limpar o campo

// this.cacheSelectors() e this.bindEvents() para manter as funções aplicadas

// usar alert('ok) para verificar se a função está funcionando

// usar console.log(this) para saber quem é o this naquele contexto

/* 
usar console.log(e) na [função(e)] para saber onde está o elemento para aplicar a função no comando. Ex: 

  Events: {
    checkButton_click: function(e) {
      // console.log(e.target.parentElement)
      const li = e.target.parentElement
    }
  }
*/

// variáveis html com $ na frente (boa prática)
