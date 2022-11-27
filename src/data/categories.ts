import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: 'blue', expense: true },
    rent: { title: 'Aluguel', color: 'brown', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    eletrodomestico: { title: 'Eletro Doméstico', color: 'orange', expense: true },
    education: { title: 'Educação', color: 'skyblue', expense: true }
}