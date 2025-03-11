// Fonction pour changer la couleur de l'image du produit
function changeColor(product, color) {
    let image = document.getElementById(`image-${product}`);
    image.src = `${product}-${color}.jpg`;
}

// Fonction pour simuler l'achat d'un produit
function acheter(produit) {
    alert(`Vous avez acheté : ${produit}`);
}

// Fonction pour liker un produit
let likes = {
    falla: 0,
    edith: 0,
    homme: 0,
    serviette: 0,
    detergent: 0
};

function aimer(produit) {
    likes[produit]++;
    document.getElementById(`likes-${produit}`).textContent = likes[produit];
}





let cart = [];
let total = 0;

// Fonction pour ajouter un produit au panier
function ajouterAuPanier(produit, prix) {
    cart.push({ produit, prix });
    total += prix;
    document.getElementById("cart-count").textContent = cart.length;
    alert(`${produit} ajouté au panier !`);
}

// Fonction pour afficher le panier
function afficherPanier() {
    let cartDiv = document.getElementById("cart");
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.produit} - ${item.prix} FCFA`;
        cartItems.appendChild(li);
    });

    cartTotal.textContent = total;
    cartDiv.style.display = "block";
}

// Fonction pour vider le panier
function viderPanier() {
    cart = [];
    total = 0;
    document.getElementById("cart-count").textContent = 0;
    document.getElementById("cart").style.display = "none";
    alert("Votre panier a été vidé.");
}

// Fonction pour simuler le paiement
function payer() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    let numeroTelephone = prompt("Entrez votre numéro de téléphone pour le paiement (Wave, Orange Money) :");
    if (numeroTelephone) {
        alert(`Paiement de ${total} FCFA en cours via ${numeroTelephone}...`);
        viderPanier();
    }
}

