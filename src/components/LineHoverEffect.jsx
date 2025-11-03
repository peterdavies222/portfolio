import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export default function LineHoverEffect() {
  const location = useLocation()

  useEffect(() => {
    const addHover = el => {
      el.classList.add('hover-line-hold')
      el.setAttribute('hover-start', Date.now())
    }

    const removeHover = el => {
      const hoverTime = Date.now() - el.getAttribute('hover-start')
      setTimeout(() => {
        el.classList.remove('hover-line-hold')
      }, Math.max(0, 500 - hoverTime))
    }

    const lineHoverEls = document.querySelectorAll('.line-hover-element')
    const listeners = []

    lineHoverEls.forEach(el => {
      const line = el.querySelector('.hover-line')
      const enter = () => addHover(line)
      const leave = () => removeHover(line)

      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
      listeners.push({ el, enter, leave })
    })

    return () => {
      listeners.forEach(({ el, enter, leave }) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [location.pathname]) // 🔁 re-run every time you change routes

  return null
}