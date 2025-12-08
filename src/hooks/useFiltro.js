export function useFiltro(lista, busqueda, filtro) {
  return lista.filter((p) => {
    // Filtrar por género
    if (filtro !== "todos" && p.genero !== filtro) return false;

    // Filtrar por nombre o marca
    return (
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.marca.toLowerCase().includes(busqueda.toLowerCase())
    );
  });
}
