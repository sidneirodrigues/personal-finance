import * as C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';

//COMPONENTS
import { ResumeItem } from '../ResumeItem';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}



export function InfoArea({ currentMonth, onMonthChange, income, expense }: Props) {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

        console.log(currentDate)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1 );
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);

        console.log(currentDate)
    }


  return (
    <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
        </C.MonthArea>            
        <C.ResumeArea>
        <ResumeItem 
                title="Receitas"
                value={income}
                color={'blue'} 
            />
            <ResumeItem 
                title="Despesas" 
                value={expense}
                color={'red'}
            />
            <ResumeItem 
                title="Balanço" 
                value={income - expense}
                color={(income - expense) < 0 ? 'red' : 'green'}
            />
        </C.ResumeArea>
    </C.Container>
  )
}
