import { ref } from './vue.js';

export default {
  name: 'VistaUno',
  setup() {
    const isOn = ref(false);
    const toggle = () => { isOn.value = !isOn.value; };
    return { isOn, toggle };
  },
  template: `
    <section>
      <h1>Vista 1: Interruptor</h1>
      <button @click="toggle">{{ isOn ? 'Apagar' : 'Encender' }}</button>
      <div style="margin-top: 12px;">
        <img :src="isOn ? 'encendido.png' : 'apagado.png'" :alt="isOn ? 'encendido' : 'apagado'" style="max-width: 300px;" />
      </div>
    </section>
  `,
};
