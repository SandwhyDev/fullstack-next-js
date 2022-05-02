import nc from "next-connect";
import ps from "../../../prisma/conn";

const handler = nc();

handler.delete("/api/mahasiswa/delete", async (req, res) => {
  try {
    const data = await req.body;
    const result = await ps.mahasiswa.delete({
      where: {
        id: parseInt(data.id),
      },
    });

    res.status(201).json({
      success: true,
      msg: "berhasil",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default handler;
