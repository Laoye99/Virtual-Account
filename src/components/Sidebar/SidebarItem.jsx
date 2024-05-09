
"use client";

import { useRouter } from "next/navigation";
import styles from "./sidebar.module.scss";
import Image from "next/image";


const SidebarItem = ({ label, itemIcon, isActive, pageUrl, doClick }) => {

    const router = useRouter()

    const handleClick = () => {

        router.push(pageUrl);
        doClick();
    };

    const itemClassName = `${styles.sidebarItem} ${isActive ? styles.active : ""
        }`;

    return (
        <li onClick={handleClick} className={itemClassName}>
            <Image src={itemIcon} alt={label} className={styles.itemIcon} />
            {label}
        </li>
    )
}

export default SidebarItem;