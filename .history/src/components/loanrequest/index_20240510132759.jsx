"use client"
import styles from "./loanrequest.module.scss";
import addIcon from "/src/assets/addIcon2.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import { LogoutIcon } from "@/src/utility/svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, Table } from "antd";
import Link from "next/link";
import { channels } from "/src/assets/channels.svg";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import addIcon from "@/src/assets/addIcon.svg";
// import { baseUrl } from "@/src/utility/constants";
// import { useAuth } from "@/src/context/AppContext";
// import { useRouter } from "next/navigation";
import { DatePicker } from 'antd';


export default function AccountConfig() {
    return (
        <section className={styles.dashboard}>
          
          <div className={styles.tableSection}>
            <Table columns={columns} dataSource={channels} onRow={rowProps} />
          </div>
          {
            (roleUSer === "INITIATOR" || roleUSer === "ADMIN") &&
            <Image
            src={addIcon}
            width={100}
            height={100}
            className={styles.addIcon}
            onClick={handleAddVendorClick}
          />
          }
         
          <Modal
            centered
            open={channelsModal}
            onOk={() => setChannelsModal(false)}
            onCancel={() => {
              setChannelsModal(false);
            }}
            footer={null}
            style={{ maxHeight: "600px", overflowY: "auto" }}
          >
            <div className="headings text-center">
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Add Channels
              </h4>
              <p style={{ fontSize: "16px", textAlign: "center" }}>
                Fill the fields below to add channels.
              </p>
            </div>
    
            <Form layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Application Code"
                className={"username-input"}
                name="appl-code"
                rules={[
                  {
                    required: true,
                    message: "Please input application code!",
                  },
                ]}
              >
                <Input placeholder="Input application code" />
              </Form.Item>
    
              <Form.Item
                label="Application Name"
                className={"username-input"}
                name="appl-name"
                rules={[
                  {
                    required: true,
                    message: "Please input application name!",
                  },
                ]}
              >
                <Input placeholder="Input application name" />
              </Form.Item>
    
              <Form.Item
                label="auth-flg"
                className={"username-input"}
                name="auth-flg"
                rules={[
                  {
                    required: true,
                    message: "Please input auth-flg!",
                  },
                ]}
              >
                <Input placeholder="Input auth-flg" />
              </Form.Item>
    
              <Form.Item
                label="vending-aggregator"
                name="vending-aggregator"
                rules={[
                  {
                    required: true,
                    message: "Please input vending-aggregator!",
                  },
                ]}
              >
                <Input placeholder="Input vending-aggregator" />
              </Form.Item>
    
              <Form.Item
      label="last-switch-date"
      className={"username-input"}
      name="last-switch-date"
      rules={[
        {
          required: true,
          message: "Please input last-switch-date!",
        },
      ]}
    >
      <DatePicker
        style={{ width: '100%' }}
        placeholder="Select last switch date"
        format="YYYY-MM-DD"
      />
    </Form.Item>
    
              <Form.Item
                label="failure-threshold"
                className={"username-input"}
                name="failure-threshold"
                rules={[
                  {
                    required: true,
                    message: "Please input failure-threshold!",
                  },
                ]}
              >
                <Input placeholder="Input failure-threshold" />
              </Form.Item>
    
              <Form.Item
                label="data-aggr-code"
                className={"username-input"}
                name="data-aggr-code"
                rules={[
                  {
                    required: true,
                    message: "Please input data-aggr-code!",
                  },
                ]}
              >
                <Input placeholder="Input data-aggr-code" />
              </Form.Item>
    
              <Form.Item
                label="minutes"
                name="minutes"
                rules={[
                  {
                    required: true,
                    message: "Please input minutes!",
                  },
                ]}
              >
                <Input placeholder="Input minutes" />
              </Form.Item>
    
              <Form.Item
                label="del-flg"
                className={"username-input"}
                name="del-flg"
                rules={[
                  {
                    required: false,
                    message: "Please input del-flg!",
                  },
                ]}
              >
                <Input placeholder="Input del-flg" />
              </Form.Item>
    
              <Form.Item
                label="del-date"
                className={"username-input"}
                name="del-date"
                rules={[
                  {
                    required: false,
                    message: "Please input del-date!",
                  },
                ]}
              >
                 <DatePicker
        style={{ width: '100%' }}
        placeholder="Select last switch date"
        format="YYYY-MM-DD"
      />
              </Form.Item>
    
              <Form.Item
                label="del-by"
                name="del-by"
                rules={[
                  {
                    required: false,
                    message: "Please del-by!",
                  },
                ]}
              >
                <Input placeholder="Input del-by" />
              </Form.Item>
    
              <div className="pt-lg-5 pt-4">
                <Button
                  htmlType="submit"
                  style={{ background: "#d20303", color: "#FFF" }}
                  className={
                    submitLoading
                      ? "our-btn-fade w-100 mt-4 mb-4"
                      : "w-100 mt-4 mb-4"
                  }
                  // loading={sunmitLoading}
                  disabled={submitLoading}
                >
                  {submitLoading ? (
                    <Spin
                      className="white-spinner d-flex align-items-center justify-content-center"
                      style={{ color: "white" }}
                    />
                  ) : (
                    <>Submit</>
                  )}
                </Button>
              </div>
            </Form>
          </Modal>
        </section>
      );
    };

    export default AccountConfig