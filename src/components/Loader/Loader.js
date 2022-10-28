import loaderStyles from './Loader.module.css';
import bun02 from '../../images/Loader/bun-02.png';
import cheese from '../../images/Loader/cheese.png';
import meat01 from '../../images/Loader/meat-01.png';
import core from '../../images/Loader/core.png';
import meat03 from '../../images/Loader/meat-03.png';
import meat04 from '../../images/Loader/meat-04.png';
import mineralRings from '../../images/Loader/mineral-rings.png';
import sauce01 from '../../images/Loader/sauce-01.png';
import sauce04 from '../../images/Loader/sauce-04.png';
import salad from '../../images/Loader/salad.png';
import sp1 from '../../images/Loader/sp-1.png';

function Loader() {
  const images = [
    bun02,
    cheese,
    core,
    meat01,
    meat03,
    meat04,
    mineralRings,
    salad,
    sauce01,
    sauce04,
    sp1
  ];

  function getRandomImage() {
    const i = Math.floor(Math.random() * (images.length - 1));
    return images[i];
  }

  return (
    <main className={loaderStyles.main}>
      <div className={loaderStyles.background}></div>
      <div className={loaderStyles.img} style={{backgroundImage: `url(${getRandomImage()})`}}></div>
    </main>
  )
}

export default Loader;