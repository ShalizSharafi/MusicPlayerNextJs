import getDeezer from "../Api/deeze"

export async function GET(request){
      const {searchParams} = new URL(request.url)
      const query = searchParams.get('q')

      if(!query || query.length<2) return Response.json([])

       const results = await getDeezer(`search?q=${encodeURIComponent(query)}`)
       return Response.json(results)

}