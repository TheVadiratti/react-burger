import loaderStyles from './Loader.module.css';
import bun02 from '../../images/Loader/bun-02.svg';
import cheese from '../../images/Loader/cheese.svg';
import meat01 from '../../images/Loader/meat-01.svg';
import core from '../../images/Loader/core.svg';
import meat03 from '../../images/Loader/meat-03.svg';
import meat04 from '../../images/Loader/meat-04.svg';
import mineralRings from '../../images/Loader/mineral-rings.svg';
import sauce01 from '../../images/Loader/sauce-01.svg';
import sauce04 from '../../images/Loader/sauce-04.svg';
import salad from '../../images/Loader/salad.svg';
import sp1 from '../../images/Loader/sp-1.svg';

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