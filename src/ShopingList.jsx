export default function ShopingList({ items }) {
    return (
        <ul>
            {
                items.map((i) => (
                <li
                    key={i.id}
                    style={{
                    color: i.isPurchase?"gray":"red",
                    textDecoration:i.isPurchase?"line-through":"none",
                }} 
                >
                    {i.item} - {i.quantity}
                </li>
                ))
            }
        </ul>
    )
}