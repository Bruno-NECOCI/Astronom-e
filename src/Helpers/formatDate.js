export default function convertTimestamp(timestamp) {
    
    let date = new Date(timestamp)
    let mm = ('0'+(date.getMonth()+1)).slice(-2);
    let dd = ('0'+date.getDate()).slice(-2);
    let yyyy = date.getFullYear();

    date = dd + '/' + mm + '/' + yyyy;
    
    return date;

  }