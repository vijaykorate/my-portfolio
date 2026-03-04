const sql = require("mssql");

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const pool = await sql.connect();
    await pool
      .request()
      .input("name", sql.NVarChar, name)
      .input("email", sql.NVarChar, email)
      .input("message", sql.NVarChar, message)
      .query(
        "INSERT INTO Messages (name, email, message) VALUES (@name, @email, @message)",
      );

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
