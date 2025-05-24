// cosas.ts

// Definimos el tipo de los objetos que estarán en la colección
interface Cosas {
  id: number;
  name: string;
  description: string;
}

// Creamos la colección de objetos
const collection: Cosas[] = [
  { id: 1, name: "Laptop", description: "Potente para desarrollo." },
  { id: 2, name: "Teclado Mecánico", description: "Con switches clicky." },
  { id: 3, name: "Monitor Ultrawide", description: "Ideal para productividad." },
  { id: 4, name: "Mouse Ergonómico", description: "Cómodo para largas horas." },
];

/**
 * Returns the entire collection of 'Cosas' objects.
 * @returns {Cosas[]} The complete collection.
 */
export function getAll(): Cosas[] {
  return collection;
}

/**
 * Finds and returns a 'Cosas' object by its ID.
 * @param {number} id - The ID of the object to retrieve.
 * @returns {Cosas | undefined} The object with the matching ID, or undefined if not found.
 */
export function getById(id: number): Cosas | undefined {
  return collection.find(cosa => cosa.id === id);
}

