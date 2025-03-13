// Fungsi untuk berbagi artikel
document.getElementById("share-1").addEventListener("click", function () {
    const url = "https://example.com/article-1";
    if (navigator.share) {
        navigator
            .share({
                title: "Membuat Sistem Tata Letak dari Nol",
                url: url
            })
            .catch(error => console.log("Error sharing:", error));
    } else {
        alert("Fitur berbagi tidak didukung di browser ini.");
    }
});

// Fungsi untuk menyalin tautan artikel
document.getElementById("link-1").addEventListener("click", function () {
    const link = "https://example.com/article-1";
    navigator.clipboard
        .writeText(link)
        .then(() => {
            alert("Tautan berhasil disalin ke clipboard!");
        })
        .catch(error => {
            console.error("Gagal menyalin tautan:", error);
        });
});

// Fungsi untuk menyalin konten pendek
document.getElementById("copy-1").addEventListener("click", function () {
    const content = document.getElementById("content-1").innerText;
    navigator.clipboard
        .writeText(content)
        .then(() => {
            alert("Konten berhasil disalin ke clipboard!");
        })
        .catch(error => {
            console.error("Gagal menyalin konten:", error);
        });
});

// Fungsi untuk menambahkan artikel ke bookmark
document.getElementById("bookmark-1").addEventListener("click", function () {
    const title = "Membuat Sistem Tata Letak dari Nol";
    const url = "https://example.com/article-1";

    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const newBookmark = { title, url };

    if (!bookmarks.some(b => b.url === url)) {
        bookmarks.push(newBookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        alert("Artikel berhasil ditambahkan ke bookmark!");
    } else {
        alert("Artikel sudah ada di bookmark.");
    }
});

// Fungsi untuk membuka halaman artikel lengkap
document.getElementById("read-more-1").addEventListener("click", function () {
    window.location.href = "article-1.html";
});
