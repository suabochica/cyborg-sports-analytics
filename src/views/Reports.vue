<template>
  <div class="reports">
    <h1>Reportes</h1>
    <p> A continuación compartimos los reportes realizados sobre los movimientos de algunos esgrimistas</p>
    <table class="reports__table">
      <thead>
        <tr>
          <th>Nombre Completo</th>
          <th>Nacionalidad</th>
          <th>Ranking</th>
          <th>Reporte</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pepito Henriquez</td>
          <td>COL</td>
          <td>1</td>
          <td><a class="reports__button" href="/reports/henriquez_col.pdf" download>Decargar</a></td>
        </tr>
        <tr>
          <td>Juanito Quintero</td>
          <td>VEN</td>
          <td>1</td>
          <td><a class="reports__button" href="/reports/quintero_ven.pdf" download>Decargar</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

h1 {
  color: $bluelagoon;
}

p {
  text-align: left;
}

.reports {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 16px;
  width: 100%;

  @include breakpoint(desktop) {
    margin: 0 auto;
    max-width: 640px;
  }
}

.reports__table {
  overflow-x: auto;

  @include breakpoint(desktop) {
    overflow: hidden;
  }
}

.reports__button {
  background-color: $pizzas;
  border: none;
  color: $concrete;
  font-family: "Fira Sans", Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1em;
  padding: 2px 8px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color ease-in 0.3s;

  &:hover {
    background-color: $pizzas-opacity;
  }
}
</style>
