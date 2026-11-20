
/////fetch functions 


///// get the genres from genre api
async function getDeezer(path) {
    'use cache'
 const res = await fetch(`https://api.deezer.com/${path}`)
 if(!res.ok) throw new Error(`HTTPS ${res.status}`)
 const data = await res.json()
 return data.data ?? data
}


//////go through the charts api to find what sections we're looking

export async function getChart(id){
    'use cache'
    const res = await fetch(`https://api.deezer.com/chart/${id}`)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.json()
    
}

export default getDeezer