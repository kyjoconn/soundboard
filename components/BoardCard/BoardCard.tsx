import React from "react";
import styles from "./BoardCard.module.css";

export interface BoardCardProps {
    name: string;
    img_url: string;
}
const BoardCard = ({name, img_url}: BoardCardProps) => {
    return (
        <div className={`border ${styles.boardCard}`}>
              <div className={styles.boardImg} style={{backgroundImage: `url(${img_url})`}} />
              <div className="p-4">
                {name}
              </div>
            </div>
    )
}

export default BoardCard;