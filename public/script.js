
document.getElementById('orderForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // ページの再読み込みを防ぐ
        
  const name = document.getElementById('name').value;
  const item = document.getElementById('item').value;

  const orderData = {
    name: name,
    item: item
  };
        
  try {
    const res = await fetch('https://09b9-2400-4153-b21-c00-4c2-d066-da91-7c6b.ngrok-free.app/order', {
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