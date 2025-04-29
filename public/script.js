
document.getElementById('orderForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // ページの再読み込みを防ぐ
        
  const name = document.getElementById('name').value;
  const item = document.getElementById('item').value;

  const orderData = {
    name: name,
    item: item
  };
        
  try {
    const res = await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
        
    const result = await res.json();
    document.getElementById('response').textContent = result.message;
  } catch (error) {
    document.getElementById('response').textContent = '失敗したよお…💦';
    console.error(error);
  }
});
