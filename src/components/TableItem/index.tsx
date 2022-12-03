import { Item } from '../../types/Item'
import * as C from './styles'
import { formatCurrency } from '../../helpers/formatCurrency';
import { formatDate } from '../../helpers/dateFilter'

import { categories } from '../../data/categories'

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {

    // console.log(item.date)
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>

            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                     {categories[item.category].title}
                </C.Category>                 
            </C.TableColumn>
            
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                {formatCurrency(item.value)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}