import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 3000
})

// Mensagem de sucesso padrão
Vue.toasted.register(
  'defaultSuccess',
  payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
  { type: 'success', icon: 'check' }
)

// Mensagem de erro padrão
Vue.toasted.register(
  'defaultError',
  payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg,
  { type: 'error', icon: 'times' }
)