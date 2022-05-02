import nc from "next-connect";
import ps from "../../../prisma/conn";

const handler = nc();

handler.get("/api/mahasiswa/read", async (req, res) => {
  try {
    const result = await ps.mahasiswa.findMany();

    res.status(200).json({
      success: true,
      query: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default handler;
