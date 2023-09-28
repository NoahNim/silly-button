export default function CustomersLayout({
    children, // will be a page or a nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            {children}
        </div>
    )
}

