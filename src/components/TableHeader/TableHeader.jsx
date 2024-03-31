import css from '../TableHeader/TableHeader.module.css'
export default function TableHeader() {
   return (<thead>
        <tr className={css.headerTab}>
            <th className={css.headerItem}>Type</th>
            <th className={css.headerItem}>Amount</th>
            <th className={css.headerItem}>Currency</th>
        </tr>
    </thead>)
}