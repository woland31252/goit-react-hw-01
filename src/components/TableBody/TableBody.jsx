import css from '../TableBody/TableBody.module.css'
export default function TableBody({ items: {
    type,
    amount,
    currency
}}) {
    return (
        <>
            <td className={css.bodyItem}>{type}</td>
            <td className={css.bodyItem}>{amount}</td>
            <td className={css.bodyItem}>{currency}</td>
        </>
        
    )
}