const aritmetica = () => ({
    name: "Aritmética", actions: ["+", "-", "*", "/", "%"]
});
const logica = () => (
    {
        name: "Lógica", actions: ["==", "!=", ">",">=", "<","<="]
    }
);
const especial = () => (
    {
        name: "Especial", actions: ["par", "impar", "primo"]
    }
);
const condicional = () => (
    {
        name: "Condicional", actions: ["||", "&&", "X"]
    }
);

module.exports = { aritmetica, logica, especial, condicional };