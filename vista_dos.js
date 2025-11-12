import { ref } from './vue.js';

export default {
  name: 'VistaDos',
  setup() {
    const students = [
      { id: 1, firstName: 'Lucía', lastName: 'García', grade: 92 },
      { id: 2, firstName: 'Mateo', lastName: 'Hernández', grade: 78 },
      { id: 3, firstName: 'Sofía', lastName: 'Martínez', grade: 85 },
      { id: 4, firstName: 'Diego', lastName: 'López', grade: 67 },
      { id: 5, firstName: 'Valentina', lastName: 'Pérez', grade: 95 },
      { id: 6, firstName: 'Daniel', lastName: 'Ramírez', grade: 88 },
      { id: 7, firstName: 'Camila', lastName: 'Torres', grade: 73 },
      { id: 8, firstName: 'Alejandro', lastName: 'Flores', grade: 100 },
      { id: 9, firstName: 'Isabella', lastName: 'Ruiz', grade: 81 },
      { id: 10, firstName: 'Sebastián', lastName: 'Gómez', grade: 60 },
    ];
    const query = ref('');
    const rowStyle = (s) => (s && s.grade < 70 ? { backgroundColor: '#ffeeee' } : {});
    const matches = (s) => (
      s && s.firstName ? s.firstName.toLowerCase().includes(query.value.toLowerCase()) : false
    );
    return { students, query, rowStyle, matches };
  },
  template: `
    <section>
      <h1>Vista 2: Tabla de estudiantes</h1>
      <input type="text" placeholder="Filtrar por nombre" v-model="query" />
      <table border="1" cellspacing="0" cellpadding="6" style="margin-top: 12px;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Nota</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="s in students">
            <tr v-if="matches(s)" :key="s.id" :style="rowStyle(s)">
              <td>{{ s.id }}</td>
              <td>{{ s.firstName }}</td>
              <td>{{ s.lastName }}</td>
              <td>{{ s.grade }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
  `,
};
