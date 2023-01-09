import React from "react";
import styles from "./BoardCard.module.css";

export interface BoardCardProps {
    name: string;
    img_url: string;
}
//https://cdn.openai.com/labs/images/A%20photo%20of%20a%20white%20fur%20monster%20standing%20in%20a%20purple%20room.webp?v=1
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