import React, { createContext, useState } from 'react'
export const tokenAutherisationContext = createContext()

function TokenAuth({childern}) {
    const [isAuthorized,setIsAuthorized] = useState(false)
  return (
    <tokenAutherisationContext.Prover value={{isAuthorized,setIsAuthorized}}>
        {childern}
    </tokenAutherisationContext.Prover>
  )
}

export default TokenAuth