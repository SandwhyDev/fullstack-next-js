import axios from "axios";
import React from "react";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { nama_lengkap, alamat, email, nomor_hp, usia } = e.target;

    axios("/api/mahasiswa/create", {
      method: "POST",
      data: {
        nama_lengkap: nama_lengkap.value,
        alamat: alamat.value,
        email: email.value,
        nomor_hp: nomor_hp.value,
        usia: usia.value,
      },
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
      .then((res) => {
        if (res.status === 201) {
          alert("berhasil");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <form
      className="w-[300px] p-2 bg-white shadow-lg flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <div className="form_group flex flex-col gap-2">
        <label htmlFor="nama_lengkap" className="font-light uppercase">
          nama lengkap
        </label>
        <input
          type="text"
          name="nama_lengkap"
          id="nama_lengkap"
          className="border-2 outline-none px-2"
        />
      </div>

      <div className="form_group flex flex-col gap-2">
        <label htmlFor="email" className="font-light uppercase">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="border-2 outline-none px-2"
        />
      </div>

      <div className="form_group flex flex-col gap-2">
        <label htmlFor="nomor_hp" className="font-light uppercase">
          nomor hp
        </label>
        <input
          type="text"
          name="nomor_hp"
          id="nomor_hp"
          className="border-2 outline-none px-2"
        />
      </div>

      <div className="form_group flex flex-col gap-2">
        <label htmlFor="alamat" className="font-light uppercase">
          alamat
        </label>
        <textarea
          type="text"
          name="alamat"
          id="alamat"
          className="border-2 outline-none px-2"
        ></textarea>
      </div>

      <div className="form_group flex flex-col gap-2">
        <label htmlFor="usia" className="font-light uppercase">
          usia
        </label>
        <input
          type="text"
          name="usia"
          id="usia"
          className="border-2 outline-none px-2"
        />
      </div>

      <button className="p-2 bg-blue-500 uppercase text-white text-xl">
        Submit
      </button>
    </form>
  );
};

export default Form;
