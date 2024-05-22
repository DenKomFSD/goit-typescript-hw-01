// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

let unionValue: string | number;

let literalToggle: "enable" | "disable";

export { unionValue, literalToggle };
