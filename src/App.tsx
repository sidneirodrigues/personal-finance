import * as C from './App.styles';
import {Item} from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { useState, useEffect } from 'react';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

//COMPONENTS
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';


const App = () => {
  const [list, setList] = useState(items);
  const [fiteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); // Usando a data atual. 
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  // console.log(getCurrentMonth())

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]) 

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in fiteredList) {
      if(categories[fiteredList[i].category].expense) {
        expenseCount += fiteredList[i].value;
      }else {
        incomeCount += fiteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [fiteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema de Finanças Pessoais</C.HeaderText>
      </C.Header>
      <C.Body>

        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem}/>

        <TableArea list={fiteredList} />

      </C.Body>
    </C.Container>
  )
}

export default App