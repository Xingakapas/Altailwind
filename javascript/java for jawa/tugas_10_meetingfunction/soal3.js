// Variabel global untuk menyimpan stok barang (bisa diganti dengan database nanti)
let stock = {
    "Laptop": 50,
    "Smartphone": 100
};

function checkStock(item, requestedQuantity) {
    if (requestedQuantity > stock[item]) {
        return `Stok tidak mencukupi untuk ${item}`;
    } else {
        return `Stok mencukupi untuk ${item}`;
    }
}

function restockItem(item, additionalStock) {
    stock[item] += additionalStock;
    if (stock[item] >= requestedQuantity) {
        return `Pengisian ulang stok untuk ${item} selesai`;
    } else {
        return `Pengisian ulang stok untuk ${item} masih diperlukan`;
    }
}

// Contoh penggunaan:
let itemToCheck = "Laptop";
let requestedQuantity = 60;

console.log(checkStock(itemToCheck, requestedQuantity)); // Output: Stok tidak mencukupi untuk Laptop

// Tambahkan stok Laptop sebanyak 20
restockItem("Laptop", 20);
console.log(checkStock(itemToCheck, requestedQuantity)); // Output: Stok mencukupi untuk Laptop