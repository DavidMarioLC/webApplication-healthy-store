import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import style from "../ui/pay/styles/style.module.css";
import { FiChevronDown, FiArrowLeft } from "react-icons/fi";
import Cleave from "cleave.js/react";
import { ProductCart } from "../product/components/ProductCart";
import { useStore } from "../context/storeContext";
import { formatPrice } from "../utils/formatPrice";
import { motion, AnimatePresence } from "framer-motion";
const Pay = () => {
  const { productsCart, productCartIsEmpty, priceTotalCart, emptyCart } =
    useStore();
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const sendSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showModal();
    emptyCart();
  };

  const goToHome = () => {
    router.push("/");
  };
  return (
    <>
      <div className={style.header}>
        <button className={style.headerButton} onClick={goToHome}>
          <FiArrowLeft className={style.headerButtonIcon} />
          Volver
        </button>
      </div>
      <div className={style.wrapper}>
        <div className={style.pay}>
          <aside className={style.aside}>
            <div className={style.asideHeader}>
              <h2 className={style.asideTitle}>Mis productos seleccionados</h2>
            </div>
            {/* empty */}
            {productCartIsEmpty() ? (
              <div className={style.emptyCart}>
                <p>No hay productos en el carrito.</p>
              </div>
            ) : (
              <div className={style.listProductScroll}>
                <div className={style.listProducts}>
                  {productsCart.map((product) => (
                    <ProductCart key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
            <div className={style.asideFooter}>
              <p>Total</p>
              <p>{formatPrice(priceTotalCart())}</p>
            </div>
          </aside>
          <main className={style.main}>
            <form className={style.form} onSubmit={sendSubmit}>
              <h1 className={style.title}>Informaci??n de contacto</h1>
              <div className={style.formField}>
                <input
                  required
                  className={style.input}
                  type="mail"
                  placeholder="Correo el??ctronico"
                  autoFocus
                />
                <input type="checkbox" id="oferts" className={style.checkbox} />
                <label htmlFor="oferts">
                  Enviarme novedades y ofertas por correo electr??nico
                </label>
              </div>
              <h2 className={style.title}>Direcci??n de env??o</h2>
              <div className={style.formField}>
                <label htmlFor="country" className={style.label}>
                  Pa??s/regi??n
                </label>
                <select name="" id="" className={style.select}>
                  <option value="Per??">Per??</option>
                  <option value="M??xico">M??xico</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Brazil">Brazil</option>
                </select>
                <div className={style.decoration}>
                  <FiChevronDown className={style.icon} />
                </div>
              </div>
              <div className={style.column_flex}>
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className={style.input}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className={style.input}
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Calle y n??mero de casa"
                  className={style.input}
                  required
                />
              </div>
              <div className={style.column_flex}>
                <div className={style.formField}>
                  <label htmlFor="postal" className={style.labelInput}>
                    C??digo postal
                  </label>
                  <input
                    type="text"
                    id="postal"
                    className={style.inputWithLabel}
                    placeholder="28001"
                    required
                  />
                </div>
                <div className={style.formField}>
                  <label htmlFor="city" className={style.label}>
                    Ciudad
                  </label>
                  <input
                    type="text"
                    id="city"
                    className={style.inputWithLabel}
                    placeholder="Lima"
                    required
                  />
                </div>
                <div className={style.formField}>
                  <label htmlFor="provincia" className={style.label}>
                    Provincia
                  </label>
                  <select name="" id="provincia" className={style.select}>
                    <option value="Per??">Ica</option>
                    <option value="M??xico">Pisco</option>
                    <option value="Argentina">Chincha</option>
                    <option value="Colombia">Nazca</option>
                    <option value="Brazil">Palpa</option>
                  </select>
                  <div className={style.decoration}>
                    <FiChevronDown className={style.icon} />
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Tel??fono"
                  className={style.input}
                  required
                />
              </div>
              <div className={style.formField}>
                <label htmlFor="creditCard" className={style.label}>
                  Credit card
                </label>
                <Cleave
                  required
                  className={style.inputWithLabel}
                  value={""}
                  id="creditCard"
                  placeholder="1234 12341 234123"
                  name="creditCard"
                  onChange={() => {}}
                  options={{
                    creditCard: true,
                    // onCreditCardTypeChanged,
                  }}
                />
              </div>
              <div className={style.column_flex}>
                <div className={style.formField}>
                  <label htmlFor="expirationDate" className={style.label}>
                    Fecha de vencimiento
                  </label>
                  <Cleave
                    required
                    className={style.inputWithLabel}
                    value={""}
                    id="cardDate"
                    autoComplete="cc-date"
                    name="cardDate"
                    placeholder="MM/YY"
                    onChange={() => {}}
                    options={{ date: true, datePattern: ["m", "y"] }}
                  />
                </div>
                <div className={style.formField}>
                  <label htmlFor="cvv" className={style.label}>
                    CVV
                  </label>
                  <Cleave
                    required
                    className={style.inputWithLabel}
                    id="cardCVV"
                    placeholder="CVV"
                    name="cvv"
                    value={""}
                    onChange={() => {}}
                    options={{ blocks: [3], numericOnly: true }}
                  />
                </div>
              </div>
              <div>
                <button className={style.button}>Pagar</button>
              </div>
            </form>
          </main>
        </div>
      </div>
      <AnimatePresence>
        {modal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.overlay}
          >
            <div className={style.modal}>
              <Image
                src="/success.png"
                title="success"
                alt="success"
                width="400"
                height="200"
              />
              <h2>??Gracias por tu compra!</h2>
              <button className={style.modalButton} onClick={goToHome}>
                Seguir comprando
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Pay;
