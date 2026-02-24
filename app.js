class AguaDashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.state = {
      registros: [],
      viviendas: ["Vivienda A", "Vivienda B", "Vivienda C", "Vivienda D"],
    };
  }

  connectedCallback() {
    this._render();
    this._wireEvents();
  }

  _render() {
    const style = `
      :host { display: block; }
      .card { background: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 20px rgba(0,0,0,.1); }
      .title { font-size: 1.5rem; color: #0036d1; margin-bottom: 15px; font-weight: 700; }
      select, input { width: 100%; padding: 10px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #ddd; }
      button { padding: 10px 20px; background-color: #0036d1; color: white; border: none; cursor: pointer; }
    `;

    const html = `
      <div class="card">
        <h2 class="title">Gestión de Agua Potable Comunitaria</h2>
        <form>
          <label for="vivienda">Vivienda</label>
          <select id="vivienda" required>
            <option value="" disabled selected>Seleccione una vivienda</option>
            ${this.state.viviendas.map(v => `<option value="${v}">${v}</option>`).join('')}
          </select>

          <label for="tipo">Tipo de evento</label>
          <select id="tipo" required>
            <option value="LECTURA">Lectura de consumo (m³)</option>
            <option value="FUGA">Posible fuga (caudal L/min)</option>
            <option value="PRESION">Baja presión (psi)</option>
          </select>

          <label for="valor">Valor</label>
          <input type="number" id="valor" placeholder="Ej: 12.50" required />

          <label for="fecha">Fecha</label>
          <input type="date" id="fecha" required />

          <label for="nota">Nota (opcional)</label>
          <input type="text" id="nota" placeholder="Ej: Se escuchó fuga cerca del medidor" />

          <button type="button" id="agregarRegistro">Agregar registro</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Vivienda</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody id="tablaRegistros">
            <tr><td colspan="4">No hay registros aún.</td></tr>
          </tbody>
        </table>
      </div>
    `;

    this.shadowRoot.innerHTML = `<style>${style}</style>${html}`;
  }

  _wireEvents() {
    const agregarRegistroButton = this.shadowRoot.querySelector("#agregarRegistro");
    agregarRegistroButton.addEventListener("click", () => this._agregarRegistro());
  }

  _agregarRegistro() {
    const vivienda = this.shadowRoot.querySelector("#vivienda").value;
    const tipo = this.shadowRoot.querySelector("#tipo").value;
    const valor = this.shadowRoot.querySelector("#valor").value;
    const fecha = this.shadowRoot.querySelector("#fecha").value;
    const nota = this.shadowRoot.querySelector("#nota").value;

    // Validación de campos vacíos
    if (!vivienda || !tipo || !valor || !fecha) {
      alert("Por favor, complete todos los campos obligatorios.");
      return;
    }

    // Crear el registro
    const registro = { vivienda, tipo, valor, fecha, nota };
    this.state.registros.push(registro);
    this._actualizarTabla();
  }

  _actualizarTabla() {
    const tbody = this.shadowRoot.querySelector("#tablaRegistros");
    tbody.innerHTML = this.state.registros.map(r => `
      <tr>
        <td>${r.vivienda}</td>
        <td>${r.tipo}</td>
        <td>${r.valor}</td>
        <td>${r.fecha}</td>
      </tr>
    `).join('');
  }
}

customElements.define("agua-dashboard", AguaDashboard);