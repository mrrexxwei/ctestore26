// Minimal interactions: category filter, view & wishlist handlers, newsletter subscribe
document.addEventListener('DOMContentLoaded', function () {
  // Category chips
  const chips = document.querySelectorAll('.chip');
  const products = Array.from(document.querySelectorAll('.card'));

  function setActiveChip(chipEl){
    chips.forEach(c=>c.classList.remove('active'));
    chipEl.classList.add('active');
  }

  function filterBy(cat){
    products.forEach(p=>{
      const pcat = p.getAttribute('data-cat');
      if(cat === 'all' || pcat === cat) p.style.display = '';
      else p.style.display = 'none';
    });
  }

  chips.forEach(chip=>{
    chip.addEventListener('click', () => {
      const cat = chip.dataset.cat;
      setActiveChip(chip);
      filterBy(cat);
    });
  });

  // View and wishlist buttons
  document.querySelectorAll('.view').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const card = e.target.closest('.card');
      const title = card.querySelector('h3').innerText;
      alert(`Viewing product: ${title}\nThis is a static demo page.`)
    });
  });

  document.querySelectorAll('.wishlist').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const card = e.target.closest('.card');
      const title = card.querySelector('h3').innerText;
      btn = e.target;
      btn.textContent = 'Saved';
      btn.disabled = true;
      btn.classList.add('ghost');
      alert(`${title} saved to your wishlist (demo).`);
    });
  });

  // Newsletter subscribe
  const newsletter = document.getElementById('newsletter');
  if(newsletter){
    newsletter.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = newsletter.querySelector('input[type="email"]').value.trim();
      if(!email){
        alert('Please enter a valid email.');
        return;
      }
      alert(`Thanks — ${email} has been subscribed to Taconic updates (demo).`);
      newsletter.reset();
    });
  }
});
