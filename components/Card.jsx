import axios from "axios";
import React, { useState, useEffect } from "react";
import FormEdit from "./FormEdit";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("/api/mahasiswa/read", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.query);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleDelete = (id) => {
    let yakin = confirm("yakin hapus id " + id + " ?");
    if (!yakin) {
      return false;
    }

    axios("/api/mahasiswa/delete", {
      method: "DELETE",
      data: {
        id: id,
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

  const [stateEdit, setStateEdit] = useState({
    show: false,
  });

  const handleEdit = (id, nama_lengkap, alamat, email, nomor_hp, usia) => {
    setStateEdit({
      show: true,
      id: id,
      nama_lengkap: nama_lengkap,
      alamat: alamat,
      email: email,
      nomor_hp: nomor_hp,
      usia: usia,
    });
  };

  return (
    <div className="flex flex-wrap gap-4  w-full">
      {data.map((e) => {
        return (
          <div className="w-[380px] h-[280px]  flex flex-col justify-between gap-4 bg-white shadow-md">
            {stateEdit.show && (
              <FormEdit
                id={e.id}
                nama_lengkap={e.nama_lengkap}
                email={e.email}
                nomor_hp={e.nomor_hp}
                alamat={e.alamat}
                usia={e.usia}
              />
            )}
            <div className="flex gap-4 p-5">
              <div className="flex flex-col gap-2 uppercase">
                <h1>nama lengkap</h1>
                <h1>email</h1>
                <h1>nomor hp</h1>
                <h1>alamat</h1>
                <h1>usia</h1>
              </div>

              <div className="flex flex-col gap-2 ">
                <h1>: {e.nama_lengkap}</h1>
                <h1>: {e.email}</h1>
                <h1>: {e.nomor_hp}</h1>
                <h1>: {e.alamat}</h1>
                <h1>: {e.usia}</h1>
              </div>
            </div>

            <div className="w-[50%] bg-gray-500 flex ml-auto">
              <button
                className="w-full p-2 bg-blue-500 uppercase text-white "
                onClick={() => {
                  handleEdit(
                    e.id,
                    e.nama_lengkap,
                    e.email,
                    e.nomor_hp,
                    e.alamat,
                    e.usia
                  );
                }}
              >
                edit
              </button>
              <button
                className="w-full p-2 bg-red-500 uppercase text-white "
                onClick={() => {
                  handleDelete(e.id);
                }}
              >
                hapus
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
