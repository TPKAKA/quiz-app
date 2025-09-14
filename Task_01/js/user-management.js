// Xử lý các nút Edit/Delete (demo)
document.querySelectorAll('.user-list .edit').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Edit user (demo)');
  });
});
document.querySelectorAll('.user-list .delete').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Delete user?')) {
      alert('User deleted (demo)');
    }
  });
});

// Xử lý form thêm user (demo)
document.querySelector('.add-user-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('User added (demo)');
  this.reset();
});