import styles from "./Card.module.scss";

function Card({
  repositoryName,
  repositoryDescription,
  stars,
  issues,
  timeIntervalByOwner,
  ownerAvatar,
  owner,
}) {
  return (
    <div className={styles.Card}>
      <img src={ownerAvatar} alt="Avatar" />
      <div className={styles.CardInfo}>
        <h2>{repositoryName}</h2>
        <p>{repositoryDescription}</p>
        <div>
          <span>Stars: {stars}</span>
          <span>Issues {issues} </span>
          <span>
            Submitted{" "}
            {timeIntervalByOwner > 1
              ? `${timeIntervalByOwner} days`
              : `${timeIntervalByOwner} day`}{" "}
            ago by {owner}{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
