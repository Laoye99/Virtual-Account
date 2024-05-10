"use client";

import React, { useState } from 'react'
import styles from "./Header.module.scss"
import Image from "next/image"
import moment from 'moment/moment'
import { NavDropdown, LogoutIcon } from '/src/utility/svg'
import { Dropdown, Space, Modal, Form, Button, Spin } from 'antd';
import logout from "/src/assets/logout.png"
import { useAuth } from "/src/context/AppContext";
import NotificationDropdown from './NotificationDropdown';

const DashboardHeader = ({ selectedStepLabel, isSidebarOpen, toggleSidebar }) => {
    
    const { logoutNow } = useAuth();
    const currentDateTime = moment();
    const formattedDateTime = currentDateTime.format('dddd, MMMM D YYYY');
    const formattedTime = currentDateTime.format('hh:mmA');

    const [logoutModal, setLogoutModal] = useState(false);

    // const Logout = () => {
    //     console.log("fuck i am logging out")
    //     router.push("/")
    // }


    const items = [
        {
            key: '1',
            label: (
                <div
                    onClick={() => {
                        setLogoutModal(true);
                    }}
                >
                    {LogoutIcon} Logout
                </div>
            ),
        },
    ];


    return (
        <header className={styles.headerBox}>


            <div className={styles.headerLabel}>
                <p>{selectedStepLabel}</p>
            </div>
           
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem"}}>
            <NotificationDropdown />
            <div>

      

                <Dropdown
                    menu={{
                        items,
                    }}
                    overlayClassName="logout-icon"
                >
                    <a>
                        <Space>
                            <div>
                                <h1>logout</h1>
                            </div>
                            {NavDropdown}
                        </Space>
                    </a>
                </Dropdown>

                <h3>{formattedTime}</h3>
                <span>{formattedDateTime}</span>
            </div>
            </div>

            <Modal
                title={<div style={{ textAlign: "center", color: "#b4342f", fontSize: "2.4rem", fontWeight: "500", marginBottom: "2rem" }}>Logout</div>}
                centered
                open={logoutModal}
                onOk={() => {
                    setLogoutModal(false);
                }}
                onCancel={() => setLogoutModal(false)}
                footer={null}
            >
                <div className={styles.logout}>
                    <Form layout="vertical">
                        <div className={styles.logoutModal}>
                            <Image
                                src={logout}
                                alt="logout image"
                                width={140}
                                height={140}
                            />
                            <p>Are you sure you want to logout?</p>
                        </div>

                        <Form.Item className={styles.buttons}>
                            <Button
                                htmlType="submit"
                                onClick={logoutNow}
                                style={{ background: '#7D0003', color: '#fff', marginRight: "2rem", }}
                            >

                                <>Logout </>

                            </Button>

                            <Button
                                type="primary"
                                onClick={() => setLogoutModal(false)}
                                style={{ background: '#FFF', color: '#1C1C1C' }}
                            >
                                Cancel
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>



        </header>
    )
}

export default DashboardHeader