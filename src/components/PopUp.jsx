import styles from "./styles/popUp.module.scss";

export default function PopUp({ getFirstOrder, getSecondOrder, setShowPopUp }) {
  return (
    <>
      <div className={styles.inner}>
        <div className={styles.wrap}>
          <h1>Заказ</h1>
          <div className={styles.flex}>
            <div className={styles.item}>
              <h3>{getFirstOrder.name}</h3>
              <p>{getFirstOrder.description}</p>
            </div>
            <div className={styles.item}>
              <h3>{getSecondOrder.name}</h3>
              <p>{getSecondOrder.description}</p>
            </div>
          </div>
          <h3 className={styles.totalCost}>
            Итого: {getFirstOrder.price + getSecondOrder.price} руб.
          </h3>

          <button className={styles.goOk} onClick={() => setShowPopUp(false)}>
            OK
          </button>
        </div>
      </div>
    </>
  );
}
