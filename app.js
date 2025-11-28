// app.js

// 🔹 Importar los SDK de Firebase (v11 modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "./firebaseConfig.js";


// 🔹 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const tareasCol = collection(db, "tareas");

// 🔹 Referencias del DOM
const registroForm = document.getElementById("registroForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");
const panel = document.getElementById("panel");
const listaTareas = document.getElementById("listaTareas");
const tareaInput = document.getElementById("tareaInput");
const tareaBtn = document.getElementById("btnAgregar"); // ✅ coincide con tu HTML


// ----------------------------------------------------
// 🔸 REGISTRO
// ----------------------------------------------------
registroForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const pass = e.target.password.value;
  try {
    await createUserWithEmailAndPassword(auth, email, pass);
    alert("✅ Usuario registrado");
    registroForm.reset();
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// ----------------------------------------------------
// 🔸 LOGIN
// ----------------------------------------------------
loginForm?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const pass = e.target.password.value;
  try {
    await signInWithEmailAndPassword(auth, email, pass);
    alert("✅ Sesión iniciada");
    loginForm.reset();
  } catch (error) {
    alert("❌ Error al iniciar sesión: " + error.message);
  }
});

// ----------------------------------------------------
// 🔸 LOGOUT
// ----------------------------------------------------
logoutBtn?.addEventListener("click", async () => {
  await signOut(auth);
  alert("👋 Sesión cerrada");
});

// ----------------------------------------------------
// 🔸 DETECTAR USUARIO ACTIVO
// ----------------------------------------------------
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Usuario autenticado:", user.email);
    panel.style.display = "block";
    cargarTareas(user);
  } else {
    console.log("👋 Ningún usuario logueado, limpiando panel...");
    panel.style.display = "none";
    listaTareas.innerHTML = "";   // Limpia las tareas
    tareaInput.value = "";        // Limpia el campo de texto
  }
});

// ----------------------------------------------------
// 🔸 AGREGAR TAREA
// ----------------------------------------------------
tareaBtn?.addEventListener("click", async () => {
  const texto = tareaInput.value.trim();
  if (!texto) return alert("⚠️ Escribe una tarea");

  const user = auth.currentUser;
  if (!user) return alert("⚠️ Debes iniciar sesión");

  try {
    await addDoc(tareasCol, {
      texto,
      fecha: new Date().toISOString(), // ✅ formato compatible
      uid: user.uid,
      email: user.email
    });

    tareaInput.value = ""; // limpia el campo después de agregar
    alert("✅ Tarea agregada correctamente");
  } catch (error) {
    console.error("Error al guardar tarea:", error);
    alert("❌ Error al guardar tarea: " + error.message);
  }
});

// ----------------------------------------------------
// 🔸 CARGAR TAREAS EN TIEMPO REAL
// ----------------------------------------------------
function cargarTareas(user) {
  const q = query(tareasCol, orderBy("fecha", "desc"));
  onSnapshot(q, (snapshot) => {
    listaTareas.innerHTML = "";
    snapshot.forEach((docSnap) => {
      const tarea = docSnap.data();
      const id = docSnap.id;
      // Filtramos para mostrar solo las tareas del usuario actual
      if (tarea.uid === user.uid) {
        listaTareas.innerHTML += `
          <li class="flex justify-between items-center border-b py-2">
            <span>${tarea.texto}</span>
            <div>
              <button onclick="editarTarea('${id}', '${tarea.texto}')" class="bg-yellow-400 text-black px-2 py-1 rounded">Editar</button>
              <button onclick="eliminarTarea('${id}')" class="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
            </div>
          </li>
        `;
      }
    });
  });
}

// ----------------------------------------------------
// 🔸 EDITAR TAREA
// ----------------------------------------------------
window.editarTarea = async (id, textoActual) => {
  const nuevoTexto = prompt("Editar tarea:", textoActual);
  if (nuevoTexto && nuevoTexto.trim() !== "") {
    const ref = doc(db, "tareas", id);
    await updateDoc(ref, { texto: nuevoTexto, fecha: new Date() });
    alert("✅ Tarea actualizada");
  }
};

// ----------------------------------------------------
// 🔸 ELIMINAR TAREA
// ----------------------------------------------------
window.eliminarTarea = async (id) => {
  if (confirm("¿Eliminar esta tarea?")) {
    await deleteDoc(doc(db, "tareas", id));
    alert("🗑️ Tarea eliminada");
  }
};
