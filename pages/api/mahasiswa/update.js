import nc from "next-connect";
import ps from "../../../prisma/conn";

const handler = nc();

handler.put("/api/mahasiswa/update", async (req, res) => {
  try {
    const data = await req.body;
    const result = await ps.mahasiswa.update({
      where: {
        id: parseInt(data.id),
      },
      data: {
        nama_lengkap: data.nama_lengkap,
        email: data.email,
        nomor_hp: data.nomor_hp,
        alamat: data.alamat,
        usia: data.usia,
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
