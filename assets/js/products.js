
fetch('data/produk.json').then(r=>r.json()).then(data=>{
  const grid = document.getElementById('productGrid');
  const filter = document.getElementById('filterCat');
  function render(list){
    grid.innerHTML='';
    list.forEach(p=>{
      const col = document.createElement('div'); col.className='card reveal';
      col.style.marginBottom='18px';
      col.innerHTML = `<img src="${p.image}" alt="${p.nama}"><div style="padding:14px"><h5>${p.nama}</h5><p class="small-muted">${p.deskripsi}</p><div style="display:flex;gap:8px;margin-top:12px"><a href="detail.html?id=${p.id}" class="btn btn-primary btn-sm">Detail</a><button class="btn btn-outline-light btn-sm" onclick="openQuote('${p.nama}')">Minta Penawaran</button></div></div>`;
      const wrap = document.createElement('div'); wrap.className='col-md-4'; wrap.appendChild(col);
      grid.appendChild(wrap);
    });
  }
  render(data);
  if(filter) filter.addEventListener('change', function(){ const v=this.value; if(v==='all') render(data); else render(data.filter(x=>x.kategori===v)); });
});
