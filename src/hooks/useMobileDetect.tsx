import {useEffect, useState} from 'react'

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const match = window.matchMedia('(max-width: 1023px)')
        setIsMobile(match && match.matches)

        window.addEventListener('resize', () => {
            const match = window.matchMedia('(max-width: 1023px)')
            setIsMobile(match && match.matches)
        })

        return ()=> {
            window.removeEventListener('resize', () => {
                const match = window.matchMedia('(max-width: 1023px)')

                setIsMobile(match && match.matches)
            })
        }
    }, [])
    
  return isMobile
}

export default useMobileDetect