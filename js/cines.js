import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5-Zxd5DZ-xbDX9YGhU5BDsbSHi5tIMvQ",
  authDomain: "fire-base-c388c.firebaseapp.com",
  projectId: "fire-base-c388c",
  storageBucket: "fire-base-c388c.firebasestorage.app",
  messagingSenderId: "349360369557",
  appId: "1:349360369557:web:037137fdcbcce4ed3e909c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getCines = async () => {

  const snap = await getDocs(collection(db, "cines"));

  const contenedor = document.getElementById("contenido-interno");
  contenedor.innerHTML = `<br /><h1>Nuestros Cines</h1><br />`;

  snap.forEach((cine) => {
    const c = cine.data();
    const html = `
        <div class="contenido-cine">
          <img src="img/cine/${c.id}.1.jpg" width="227" height="170" />
          <div class="datos-cine">
            <h4>${c.RazonSocial}</h4><br />
            <span>${c.Direccion} - ${c.Ciudad}<br /><br />Teléfono: ${c.Telefonos}</span>
          </div>
          <br />
          <a href="cine.html?&id=${c.id}">
            <img src="img/varios/ico-info2.png" width="150" height="40" />
          </a>
        </div>
      `;

    contenedor.innerHTML += html;
  });
};

getCines();
