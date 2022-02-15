import React from 'react';
import style from './styles/hero.module.css';
import { Wrapper } from './Wrapper';
import Image from 'next/image';

type Props = {};

export const Hero = (props: Props) => {
  return (
    <Wrapper>
      <section className={style.heroContent} aria-label='Banner healthy store'>
        <div className={style.heroGridCards}>
          <div className={style.heroCard}>
            <p className={style.heroCardText}>Frutas</p>
            <div className={style.positionImage}>
              <div className={style.wrapperImage}>
                <Image
                  className={style.imageCard}
                  src='/images/mangocard.png'
                  alt='Mango'
                  title='Mango'
                  width='160'
                  height='160'
                />
              </div>
            </div>
          </div>
          <div className={style.heroCard}>
            <p className={style.heroCardText}>Verduras</p>
            <div className={style.positionImage}>
              <div className={style.wrapperImage}>
                <Image
                  className={style.imageCard}
                  src='/images/repollocard.png'
                  alt='Repollo'
                  title='Repollo'
                  width='220'
                  height='220'
                />
              </div>
            </div>
          </div>
          <div className={style.heroCard}>
            <p className={style.heroCardText}>Legumbres</p>
            <div className={style.positionImage}>
              <div className={style.wrapperImage}>
                <Image
                  className={style.imageCard}
                  src='/images/legumbrecard.png'
                  alt='Legumbres'
                  title='Legumbres'
                  width='170'
                  height='180'
                />
              </div>
            </div>
          </div>
          <div className={style.heroCard}>
            <p className={style.heroCardText}>Artesanal</p>
            <div className={style.positionImage}>
              <div className={style.wrapperImage}>
                <Image
                  className={style.imageCard}
                  src='/images/panartesanalcard.png'
                  alt='Pan artesanal'
                  title='Pan artesanal'
                  width='180'
                  height='180'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
