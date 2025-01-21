import styles from "./Hero.module.css";
function Hero() {
  return (
    <div
      className={`${styles.bgImg} py-80 text-center text-white flex flex-col gap-5`}
    >
      <h1 className="text-6xl uppercase font-bold ">Banking solutions</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
        deleniti voluptatum eligendi ad reiciendis error?
      </p>
    </div>
  );
}

export default Hero;
