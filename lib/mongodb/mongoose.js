import mongoose from "mongoose";

let isConnected = false; // Lacak status koneksi

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // Tetapkan opsi pengaturan Mongoose

  if (isConnected) {
    console.log("MongoDB sudah terhubung");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "AmikomConnect", // Nama database yang ingin Anda hubungkan
    });

    isConnected = true; // Tandai bahwa koneksi berhasil

    console.log("MongoDB terhubung");
  } catch (error) {
    console.error("Koneksi MongoDB gagal:", error);
  }
};
