"use client";
import { useState } from "react";

export default function Meeting() {
  const headers = [
    { name: "Jorge Bravo", color: "bg-blue-800" },
    { name: "Carlos Peña", color: "bg-yellow-700" },
    { name: "Fabián Torres", color: "bg-orange-700" },
    { name: "Hans Herrera", color: "bg-green-700" },
    { name: "José Villanueva", color: "bg-pink-800" },
  ];

  const rows = [
    "Lo que hice ayer",
    "Lo que haré hoy",
    "Mis contratiempos",
  ];

  // Estado para los comentarios
  const [comments, setComments] = useState(
    Array(rows.length).fill(Array(headers.length).fill(""))
  );

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
    const updatedComments = comments.map((row, rIdx) =>
      row.map((col, cIdx) =>
        rIdx === rowIndex && cIdx === colIndex ? value : col
      )
    );
    setComments(updatedComments);
  };

  const handleSave = () => {
    console.log("✅ Comentarios guardados:", comments);
    alert("✅ Comentarios guardados correctamente");

    // Limpiar los comentarios
    const emptyComments = Array(rows.length).fill(Array(headers.length).fill(""));
    setComments(emptyComments);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Título y fecha centrados */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white">Reunión diaria</h1>
          <p className="text-lg font-semibold text-slate-300 mt-1">
            19 DE ABRIL DE 2025
          </p>
        </div>

        {/* Encabezados de columna */}
        <div className="grid grid-cols-6 gap-4 mb-6">
          <div></div>
          {headers.map((header, index) => (
            <div
              key={index}
              className={`${header.color} text-center py-2 rounded font-bold`}
            >
              {header.name}
            </div>
          ))}
        </div>

        {/* Filas de contenido */}
        {rows.map((label, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-6 gap-4 mb-4">
            {/* Etiqueta izquierda */}
            <div className="h-24 flex items-center justify-center">
              <div className="h-full w-full bg-slate-800 text-white border border-slate-600 px-4 py-2 rounded text-sm text-center font-semibold flex items-center justify-center">
                {label}
              </div>
            </div>

            {/* Inputs de cada columna */}
            {headers.map((_, colIndex) => (
              <textarea
                key={colIndex}
                placeholder="Escribe aquí"
                className="w-full h-24 p-2 rounded-md bg-slate-800 text-white border border-slate-600 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={comments[rowIndex][colIndex]}
                onChange={(e) =>
                  handleChange(rowIndex, colIndex, e.target.value)
                }
              />
            ))}
          </div>
        ))}

        {/* Botón guardar */}
        <div className="text-center mt-8">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
          >
            Guardar comentarios
          </button>
        </div>
      </div>
    </div>
  );
}
