export default function ButtonBoardLayout({
    children, // will be a page or a nested layout
}: {
    children: React.ReactNode
}) {
    return (<section style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
        {children}
    </section>)
}