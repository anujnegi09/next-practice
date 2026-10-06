export const metadata = {
  title : "instagram"
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background:"teal"}}>this is header</header>
        {children}
        <footer style={{background:"brown"}}>this is header</footer>

      </body>
    </html>
  );
}