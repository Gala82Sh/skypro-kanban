export function formatDate(dateString) {
  if (!dateString) return 'Дата не указана';
  
  const date = new Date(dateString);
  
 
  if (isNaN(date.getTime())) return 'Дата не указана';
  
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-2);
  
  return `${day}.${month}.${year}`;
}
