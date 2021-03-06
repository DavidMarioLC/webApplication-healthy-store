import type { GetStaticProps } from "next";
import Head from "next/head";
import { Header, Hero, StoreLayout } from "../ui/layout";
import OffertsProducts from "../product/screens/OffertsProducts";
import PopularProducts from "../product/screens/PopularProducts";
import { Product } from "../product/types";
import { useEffect } from "react";
import { useStore } from "../context/storeContext";
import { useApp } from "../context/appContext";
import { ModalProduct, ModalCart } from "../ui/modals";

type Props = {
  products: Product[];
};

const Home = ({ products }: Props) => {
  const { setProducts } = useStore();
  const {
    visibleModalProduct,
    visibleModalCart,
    changeVisibilityModalProduct,
    changeVisibilityModalCart,
    productSelected,
  } = useApp();
  useEffect(() => {
    setProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Health Store</title>
        <meta
          name="description"
          content="Health Store es una tiendita donde podras comprar productos saludables. "
        />
        {/* favicon */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="icon" href="/favicon.ico" />
        {/* opengraph */}
        <meta
          property="og:title"
          content="Health Store es una tiendita donde podras comprar productos saludables. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://web-application-healthy-store.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/DavidMarioLC/webApplication-healthy-store/main/opengraph.webp"
        />
        <meta
          property="og:description"
          content="Health Store es una tiendita donde podras comprar productos saludables. "
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <StoreLayout>
          <OffertsProducts />
          <PopularProducts />
        </StoreLayout>
      </main>
      <ModalProduct
        visible={visibleModalProduct}
        changeVisibility={changeVisibilityModalProduct}
        product={productSelected}
      />
      <ModalCart
        visible={visibleModalCart}
        changeVisibility={changeVisibilityModalCart}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      products: [
        {
          id: "1",
          name: "Mango",
          priceUnit: 3.0,
          priceKg: 6.0,
          weight: "600",
          unit: "ud",
          image: "/images/mango.jpg",
          imageModal: "/images/mango2.png",
          description:
            "El mango tiene forma ovalada con la piel de color variable de amarillo p??lido a rojo intenso. La pulpa es pegajosa y su coloraci??n var??a desde amarillo a anaranjado. El sabor del mango maduro es dulce y bastante ??cido cuando a??n est?? verde. Tiene un elevado contenido en gl??cidos. Su contenido en fibra no soluble es bajo, al igual que su valor cal??rico. El mango puede reducir el riesgo de contraer enfermedades ya que fortalece las funciones inmunol??gicas",
          category: "offerts",
        },
        {
          id: "2",
          name: "Pina",
          priceUnit: 6.0,
          priceKg: 3.0,
          weight: "800",
          unit: "ud",
          image: "/images/pina.jpg",
          imageModal: "/images/pina2.png",
          description:
            "La pi??a tiene una fragancia muy singular y est?? recubierta por una piel compuesta de n??dulos pentagonales de color verdoso que se vuelven anaranjados cuando madura. La pulpa es muy carnosa, perfumada, de sabroso jugo y color amarillo caracter??stico. Posee un dulce sabor con un leve toque ??cido. Es beneficiosa para facilitar la digesti??n y ??til para personas con gastritis o dispepsia. Es ligeramente laxante y normaliza las funciones intestinales",
          category: "offerts",
        },
        {
          id: "3",
          name: "Granada",
          priceUnit: 2.6,
          priceKg: 3.0,
          weight: "300",
          unit: "ud",
          image: "/images/granada.jpg",
          imageModal: "/images/granada2.png",
          description:
            "La granada es una baya globular con una corteza cori??cea. El interior est?? dividido por una membrana blanquecina con  l??bulos que contienen numerosas semillas rellenas de pulpa roja y jugosa. Suconsumo habitual es al natural y desgranada. La podemos encontrar tambi??n en ensaladas. La granada posee vitaminas A, C, E y vitaminas del grupo B, adem??s de minerales como potasio, calcio, f??sforo, magnesio, hierro y sodio. Se considera una fruta antioxidante, diur??tica y depurativa",
          category: "offerts",
        },
        {
          id: "4",
          name: "Repollo",
          priceUnit: 2.2,
          priceKg: 4.0,
          weight: "500",
          unit: "ud",
          image: "/images/repollo.jpg",
          imageModal: "/images/repollo2.png",
          description:
            "El repollo tambi??n es conocido como col rizada. Se trata de una hortaliza perteneciente a la familia de las coles. La parte que se consume es la flor o inflorescencia, muy apreciada por su sabor. Se puede utilizar de distintas maneras, tanto cruda como cocinada. El repollo es adecuado en dietas de adelgazamiento, ya que es un alimento bajo en calor??as y rico en fibra. Aporta muchas vitaminas y minerales, por lo que resulta beneficiosa en enfermedades circulatorias y cardiacas y la prevenci??n de algunos c??nceres",
          category: "offerts",
        },
        {
          id: "5",
          name: "Berenjena",
          priceUnit: 1.1,
          priceKg: 2.44,
          weight: "450",
          unit: "ud",
          image: "/images/berenjena.jpg",
          imageModal: "/images/berenjena2.png",
          description:
            "La berenjena es un fruto de color morado. Su carne firme y suave es siempre blanca y contiene numerosas semillas comestibles del mismo color. La berenjena es muy saludable. Es un alimento bajo en calor??as y en hidratos de carbono. Es de muy f??cil digesti??n y contiene una buena cantidad de zinc y potasio. Presenta en su mayor parte vitaminas A, C y ??cido f??lico. Se consume a modo de verdura, frita o rebozada en rodajas",
          category: "offerts",
        },
        {
          id: "6",
          name: "Pan de trigo ",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/panTrigoBlanco.jpg",
          imageModal: "/images/panTrigoBlanco2.png",
          description:
            "Hogaza de trigo blanco de masa madre. Pan artesanal ecol??gico. Este pan ecol??gico est?? elaborado con harina de trigo, agua, masa madre, semillas (lino dorado, s??samo, amapola y calabaza), sal y levadura. Todos los ingredientes que se utilizan en la elaboraci??n de este pan artesanal son de cultivo ecol??gico. Cada unidad pesa alrededor de 300 gramos. Pan de masa madre reci??n horneado directo de productor",
          category: "offerts",
        },
        {
          id: "7",
          name: "Calabaza ",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/calabaza.jpg",
          imageModal: "/images/calabaza2.png",
          description:
            "La calabaza es uno de esos alimentos excepcionales a los que todav??a no se ha hecho debida justicia. Su pulpa es generalmente anaranjada o amarillenta, y est?? repleta de semillas en su parte central. Es digestiva, deliciosa, de aspecto atractivo y est?? repleta de sustancias con efectos muy beneficiosos sobre la salud. La carne de la calabaza se consume cocinada como verdura, cocida, frita, gratinada, acompa??ada de salsas y como guarnici??n de diversos platos",
          category: "popular",
        },
        {
          id: "8",
          name: "Pimiento rojo",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/pimiento-rojo.jpg",
          imageModal: "/images/pimiento-rojo2.png",
          description:
            "El pimiento rojo es el m??s dulce que el pimiento verde y amarillo. Tiene un alto contenido en vitaminas y antioxidantes y representa un poderoso alimento que combate el envejecimiento y varias enfermedades graves. La principal vitamina aportada por los pimientos es la vitamina C que protege contra el c??ncer. Tambi??n es fuente de vitamina A, por lo que son buenos para la vista. El pimiento se consume crudo, cocido y asado o como guarnici??n en gran variedad de platos",
          category: "popular",
        },
        {
          id: "9",
          name: "Huevos ecol??gicos",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/huevos-ecologicos.jpg",
          imageModal: "/images/huevos-ecologicos2.png",
          description:
            "Media docena de huevos ecol??gicos. Los huevos ecol??gicos de Granjas Redondo ofrecen una sensaci??n inconfundible al paladar con una producci??n basada en los m??todos sostenibles. Los huevos ecol??gicos son morenos y son producidos por gallinas que viven al aire libre con un espacio de 8 m2 por cada gallina y son alimentadas con semillas totalmente ecol??gicas, es decir, semillas que no han sido gen??ticamente modificadas.",
          category: "popular",
        },
        {
          id: "10",
          name: "Calabaza Maxima ",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/calabazaMaxima.jpg",
          imageModal: "/images/calabazaMaxima2.png",
          description:
            "La calabaza M??xima es naranja por dentro y por fuera. Es de las m??s usada para hacer pur??, sopas o guisos ya que tiene un gran contenido de pulpa. La calabaza es uno de esos alimentos excepcionales a los que todav??a no se ha hecho debida justicia. Su pulpa est?? repleta de semillas en su parte central. Es digestiva, deliciosa, de aspecto atractivo y est?? repleta de sustancias con efectos muy beneficiosos para la la salud. La carne de la calabaza se consume cocinada, cocida o frita",
          category: "popular",
        },
        {
          id: "11",
          name: "Cebolleta ",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/cebolleta.jpg",
          imageModal: "/images/cebolleta2.png",
          description:
            "La cebolleta tiene un aspecto muy similar al cebollino, pero se diferencian en el tama??o de su bulbo. Los tallos son largos y firmes. Su sabor no llega a ser tan potente como el de la cebolla, pero tampoco tan suave como el del cebollino. Todas sus partes son comestibles y pueden usarse indistintamente en la cocina, sin embargo el sabor de la base blanca es un poco m??s intenso que el de las hojas. Es una excelente fuente de nutrientes, vitamina K y vitamina C",
          category: "popular",
        },
        {
          id: "12",
          name: "Pan de Hozaga ",
          priceUnit: 2.2,
          priceKg: 7.33,
          weight: "300",
          unit: "ud",
          image: "/images/panHogazaEspelta.jpg",
          imageModal: "/images/panHogazaEspelta2.png",
          description:
            "Hogaza de trigo blanco de masa madre. Pan artesanal ecol??gico. Este pan ecol??gico est?? elaborado con harina de trigo, agua, masa madre, semillas (lino dorado, s??samo, amapola y calabaza), sal y levadura. Todos los ingredientes que se utilizan en la elaboraci??n de este pan artesanal son de cultivo ecol??gico. Cada unidad pesa alrededor de 300 gramos. Pan de masa madre reci??n horneado directo de productor",
          category: "popular",
        },
      ],
    },
  };
};

export default Home;
