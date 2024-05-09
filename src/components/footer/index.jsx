"use client"
import React from 'react';
import { FooterWrapper } from './styles';
import styles from "./footer.module.scss";

export default function Footer() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return (
        <FooterWrapper>
            <footer>
                <div className={styles.footer}>
                    <p>
                        {currentYear} © powered by{' '}
                        <span className={styles.compName}>UBA Infometics Technologies</span>{' '}
                    </p>
                </div>
            </footer>
        </FooterWrapper>
    );
}