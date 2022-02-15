import React from 'react';
import style from '../ui/pay/styles/style.module.css';
import { FiChevronDown } from 'react-icons/fi';
type Props = {};

const pay = (props: Props) => {
  return (
    <div>
      <main>
        <form className={style.form}>
          <h1 className={style.title}>Información de contacto</h1>
          <div className={style.formField}>
            <input
              className={style.input}
              type='mail'
              placeholder='Correo eléctronico'
            />
            <input type='checkbox' id='oferts' />
            <label htmlFor='oferts'>
              Enviarme novedades y ofertas por correo electrónico
            </label>
          </div>
          <h2 className={style.title}>Dirección de envío</h2>
          <div className={style.formField}>
            <label htmlFor='country' className={style.label}>
              País/región
            </label>
            <select name='' id='' className={style.select}>
              <option value='Perú'>Perú</option>
              <option value='México'>México</option>
              <option value='Argentina'>Argentina</option>
              <option value='Colombia'>Colombia</option>
              <option value='Brazil'>Brazil</option>
            </select>
            <div className={style.decoration}>
              <FiChevronDown className={style.icon} />
            </div>
          </div>
          <div>
            <div>
              <input type='text' placeholder='Nombre' className={style.input} />
            </div>
            <div>
              <input
                type='text'
                placeholder='Apellido'
                className={style.input}
              />
            </div>
          </div>
          <div>
            <input
              type='text'
              placeholder='Calle y número de casa'
              className={style.input}
            />
          </div>
          <div>
            <div className={style.formField}>
              <label htmlFor='postal' className={style.labelInput}>
                Código postal
              </label>
              <input
                type='text'
                id='postal'
                className={style.inputWithLabel}
                placeholder='28001'
              />
            </div>
            <div className={style.formField}>
              <label htmlFor='city' className={style.label}>
                Ciudad
              </label>
              <input
                type='text'
                id='city'
                className={style.inputWithLabel}
                placeholder='Lima'
              />
            </div>
            <div className={style.formField}>
              <label htmlFor='provincia' className={style.label}>
                Provincia
              </label>
              <select name='' id='provincia' className={style.select}>
                <option value='Perú'>Perú</option>
                <option value='México'>México</option>
                <option value='Argentina'>Argentina</option>
                <option value='Colombia'>Colombia</option>
                <option value='Brazil'>Brazil</option>
              </select>
              <div className={style.decoration}>
                <FiChevronDown className={style.icon} />
              </div>
            </div>
          </div>
          <div>
            <input type='tel' placeholder='Teléfono' className={style.input} />
          </div>
          <div>
            <button className={style.button}>Pagar</button>
          </div>
        </form>
      </main>
      <aside></aside>
    </div>
  );
};

export default pay;
