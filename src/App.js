import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", color: "#333" }}>
      <header style={{ background: "#0073e6", color: "#fff", padding: "20px", textAlign: "center" }}>
        <h1>Welcome to My Website</h1>
      </header>

      {/* <nav style={{ background: "#333", padding: "10px", textAlign: "center" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Home</a>
          </li>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <a href="privacy.html" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Privacy Policy</a>
          </li>
          <li style={{ display: "inline", margin: "0 15px" }}>
            <a href="contact.html" style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }}>Contact</a>
          </li>
        </ul>
      </nav> */}

      <main style={{ maxWidth: "800px", margin: "20px auto", background: "#fff", padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
        <section>
          <h2>About This Site</h2>
          <p>This is a simple website designed for Google AdSense approval.</p>
        </section>

        {/* AdSense Ad Placeholder */}
        <section style={{ textAlign: "center", margin: "20px 0", padding: "10px", background: "#eee", borderRadius: "8px" }}>
          <p>Advertisement</p>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="YYYYYYYYYY"
            data-ad-format="auto"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({ });
          </script>
        </section>
      </main>

      <footer style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px", position: "relative", bottom: 0, width: "100%" }}>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
