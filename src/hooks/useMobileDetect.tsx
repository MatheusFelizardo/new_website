import {useEffect, useState} from 'react'

const useMobileDetect = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const match = window.matchMedia('(max-width: 1023px)')
        setIsMobile(match && match.matches)
        document.documentElement.style.setProperty('--screen-height', `${window.innerHeight - 1}px`);

        window.addEventListener('resize', () => {
            const match = window.matchMedia('(max-width: 1023px)')
            document.documentElement.style.setProperty('--screen-height', `${window.innerHeight - 1}px`);
            setIsMobile(match && match.matches)
        })

        return ()=> {
            window.removeEventListener('resize', () => {
                const match = window.matchMedia('(max-width: 1023px)')
                document.documentElement.style.setProperty('--screen-height', `${window.innerHeight - 1}px`);

                setIsMobile(match && match.matches)
            })
        }
    }, [])
    
  return isMobile
}

export default useMobileDetect