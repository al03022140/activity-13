// App mínima con 3 vistas. Vista 1: switch que alterna entre encendido.png y apagado.png
import { createApp, ref } from './vue.js';
import VistaUno from './vista_uno.js';
import VistaDos from './vista_dos.js';

const App = {
  name: 'App',
  components: { VistaUno, VistaDos },
  setup() {
    // Código simple: funciones para cambiar vista
    const currentView = ref(VistaUno);
    const toUno = () => { currentView.value = VistaUno; };
    const toDos = () => { currentView.value = VistaDos; };
    return { currentView, toUno, toDos };
  },
  template: `
    <div>
      <section>
        <button @click="toUno">Vista 1</button>
        <button @click="toDos">Vista 2</button>
      </section>
      <component :is="currentView"></component>
    </div>
  `,
};

createApp(App).mount('#app');
