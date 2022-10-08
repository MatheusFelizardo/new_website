import Loading from "../../Loading/Loading";
import CircularNavigation from "../../Menus/CircularNavigation";
import StickMenu from "../../Menus/StickyMenu/StickyMenu";
import Illuminated from "../../Texts/IlluminatedText";
import DayAndNight from "../../Toggles/DayAndNight";

export const components = [
  {
    title: 'Loading', 
    description: 'A custom loading created with CSS and HTML (JSX) only', 
    element: <Loading />,
    path: `Loading/Loading.tsx`
  },
  {
    title: 'Circular Navigation Menu', 
    description: 'A navigation menu created with CSS, HTML and Javascript to practice animations. Click in the icons to navigate.', 
    element: <CircularNavigation />,
    path: `Menus/CircularNavigation/index.tsx`
  },
  {
    title: 'Illuminated Text', 
    description: 'A text with an effect to shine each letter. Javascript used just to split the letters.', 
    element: <Illuminated />,
    path: `Texts/IlluminatedText.tsx`
  },
  {
    title: 'Day/Night Toggler', 
    description: 'A toggler of day/night created with CSS.', 
    element: <DayAndNight />,
    path: `Toggles/DayAndNight.tsx`
  },
  {
    title: 'Sticky Menu', 
    description: 'A menu fixed on top with a scroll animation in the logo": "Um menu fixado no topo com uma animação na logo ao scrollar', 
    element: <StickMenu />,
    path: `Menus/StickyMenu/StickyMenu.tsx`
  },
]