import { Item } from '../../types/Item'
import * as C from './styles'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{categories[item.category].title}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value.toFixed(2)}</C.TableColumn>
        </C.TableLine>
    )
}