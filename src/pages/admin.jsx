import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {

  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  // Protect admin route
  useEffect(() => {

    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchContacts();

  }, []);

  // Fetch contacts
  const fetchContacts = () => {

    fetch("http://localhost:5000/admin/contacts")
      .then(res => res.json())
      .then(data => {
        setContacts(data.data);
      });

  };

  // Delete contact
  const deleteContact = async (id) => {

    const confirmDelete = window.confirm("Delete this lead?");

    if (!confirmDelete) return;

    await fetch(`http://localhost:5000/admin/contact/${id}`, {
      method: "DELETE"
    });

    fetchContacts();

  };

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("adminToken");
    navigate("/admin-login");

  };

  return (

    <div style={{
      padding: "120px 60px 60px 60px",  // 🔥 important fix
      background: "#f4f6f8",
      minHeight: "100vh"
    }}>

      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>

        <h1>Admin Dashboard</h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#111",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>

      </div>

      {/* Stats */}
      <div style={{
        display: "flex",
        gap: "20px",
        marginBottom: "30px"
      }}>

        <div style={cardStyle}>
          <h3>Total Leads</h3>
          <p>{contacts.length}</p>
        </div>

        <div style={cardStyle}>
          <h3>French Leads</h3>
          <p>{contacts.filter(c => c.language === "French").length}</p>
        </div>

      </div>

      {/* Search */}
      <input
        placeholder="Search by name or email..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "6px"
        }}
      />

      {/* Table */}
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        background: "white"
      }}>

        <thead>

          <tr style={{background:"#111", color:"white"}}>

            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Language</th>
            <th style={thStyle}>Message</th>
            <th style={thStyle}>Action</th>

          </tr>

        </thead>

        <tbody>

          {contacts
          .filter(contact =>
            contact.name.toLowerCase().includes(search.toLowerCase()) ||
            contact.email.toLowerCase().includes(search.toLowerCase())
          )
          .map(contact => (

            <tr key={contact._id}>

              <td style={tdStyle}>{contact.name}</td>
              <td style={tdStyle}>{contact.email}</td>
              <td style={tdStyle}>{contact.phone}</td>
              <td style={tdStyle}>{contact.language}</td>
              <td style={tdStyle}>{contact.message}</td>

              <td style={tdStyle}>

                <button
                  onClick={() => deleteContact(contact._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}


// Styles
const cardStyle = {
  background:"white",
  padding:"20px",
  borderRadius:"8px",
  boxShadow:"0 2px 10px rgba(0,0,0,0.1)",
  minWidth:"150px"
};

const thStyle = {
  padding:"12px",
  border:"1px solid #ddd",
  textAlign:"left"
};

const tdStyle = {
  padding:"10px",
  border:"1px solid #ddd"
};