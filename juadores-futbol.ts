const junta = (num1: number, num2: number): number => {
    return (num1 * (10**2) + num2);
}


const jugador = (ini: number, fin: number): string => {
    if(ini > fin) return "";
    if(buscar(ini, fin, 1) === "")

}

const buscar = (ini:number, fin:number, i:number): number => {
    return 0;
} 




// (() => {
//   const hero: string = "Flash";
//   function theHero(): string {
//     return hero;
//   }
//   const elheroe = (): number => {
//     return 1;
//   };

//   function fullName(firsrName: string, lastName: string): String {
//     return `${firsrName} ${lastName}`;
//   }
//   const elNombre = (nombre: string, apellido: string): string => {
//     return `${nombre} ${apellido}`;
//   };

//   function fullNameTwo(firsrName: string, lastName?: string): String {
//     return `${firsrName} ${lastName || " hola"}`;
//   }

//   function fullNameThree(
//     firsrName: string,
//     lastName?: string,
//     upper: boolean = false
//   ): String {
//     if (upper) {
//       return `${firsrName} ${lastName || " hola"}`.toUpperCase();
//     } else {
//       return `${firsrName} ${lastName || " hola"}`;
//     }
//   }

//   function laFunRest(nombre: string, ...nombres: string[]): string {
//     return `${nombre} ${nombres.join(" ")}`;
//   }

//   const funExample = (firsrName: string, lastName?: string): string => {
//     return `${firsrName} ${lastName || " hola"}`;
//   };

//   let constanteFuncion: (uno: string, dos: string) => string;
//   constanteFuncion = funExample;
//   console.log(constanteFuncion("James", "Medinas"));

//   console.log(laFunRest("uno", "dos", "tres", "cuatro"));

//   console.log(fullNameThree("James", "Medina", true));

//   console.log(fullNameTwo("James"));
//   console.log(fullName("James", "Medina"));
//   console.log(elNombre("James", "Medina"));
// })();
