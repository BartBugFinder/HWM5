// Funkcja do podwajania liczb w tablicy przy użyciu metody map()
const doubleNumbers = numbers => {
    // Używamy metody map() do iteracji przez tablicę i podwajania każdej liczby
    return numbers.map(number => number * 2);
  };
  
  // Funkcja do pobierania imion studentów z tablicy obiektów przy użyciu metody map()
  const getStudentNames = students => {
    // Używamy metody map() do iteracji przez tablicę i pobrania imienia każdego studenta
    return students.map(student => student.name);
  };
  
  // Przypadki testowe
  const testDoubleNumbers = [1, 2, 3, 4, 5];
  const testStudents = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
  ];
  
  // Testowanie funkcji doubleNumbers
  console.log("Oryginalna tablica liczb:", testDoubleNumbers);
  console.log("Tablica liczb podwojonych:", doubleNumbers(testDoubleNumbers));
  
  // Testowanie funkcji getStudentNames
  console.log("\nOryginalna tablica studentów:", testStudents);
  console.log("Tablica zawierająca tylko imiona studentów:", getStudentNames(testStudents));
  