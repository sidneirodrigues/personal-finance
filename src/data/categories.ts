import { Category } from "../types/Category"

export const categories: Category = {
    food: { title: 'Alimentação', color: '#DE541E', expense: true },
    rent: { title: 'Aluguel', color: '#D6D6B1', expense: true },
    salary: { title: 'Salário', color: 'green', expense: false },
    eletrodomestico: { title: 'Eletrodomésticos', color: 'orange', expense: true },
    education: { title: 'Educação', color: '#11B5E4', expense: true },
    custosFixos: { title: 'Despesas Fixas', color: '#1481BA', expense: true},
    servicosExtras: { title: 'Serviços Extras', color: '#5ADBFF', expense: false},    
}