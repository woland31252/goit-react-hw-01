
import TableHeader from '../TableHeader/TableHeader'
import TableBody from '../TableBody/TableBody'
import css from '../TransactionHistory/TransactionHistory.module.css'
export default function TransactionHistory({items}) {
    console.log(items)
    
    return (
    <table className={css.table}>
            <TableHeader />
            <tbody className={css.bodyTabl}>
                {items.map((item, idx) => (<tr className={idx%2==1 && css.lineSecond} key={item.id}>
                    <TableBody items={item} />
                </tr>))}
            </tbody>   
    </table>
    )
   
    
}