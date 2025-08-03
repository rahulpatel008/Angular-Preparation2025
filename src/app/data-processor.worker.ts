/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const processed = data.map((item: any) => ({
    ...item,
     name: item.name.toUpperCase(),
    email: item.email.toLowerCase(),
    status: item.status === 'Active' ? '✅ Active' : '❌ Inactive'
  }));
  postMessage(processed);
});
