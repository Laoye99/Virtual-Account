"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { ArrowRight } from "/";
import { toast } from "sonner";
import styles from "./signIn.module.scss";
import ablogo from "@/src/assets/UBA-Logo.svg";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AppContext";

const SignIn = () => {
  const router = useRouter();
  const { login, user, loading } = useAuth();
  // const [loading, setLoading] = useState(false);
  console.log(user)

  const handleLogin = async (values) => {
    console.log(values)
    try {
      
      await login(values); // Use the login function from the context
      toast.success("Login successful");

      console.log(user.status.type)
     if(user.status.type == "SUCC"){
      router.push("/dashboard")
     } else {
      toast.error("Login failed")
     }
      
    } catch (error) {
      toast.error("Login failed")
      toast.error(error.response?.data?.message || "Login failed");
    } 
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.row}>
        <div className={styles.colAuto}>
          <Form
            name="basic"
            style={{ maxWidth: "100%" }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
            layout="vertical"
            onFinish={handleLogin}
          >
            <div className={styles.logoWrapper}>
              <Image
                src={ablogo}
                width={120}
                height={60}
                alt="uba Logo"
                quality={100}
                priority={true}
              />
            </div>
            <p>Enter email & password.</p>

            <Form.Item
              label="Email address"
              className={"username-input"}
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                // {
                //   type: "email",
                //   message: "Please input a valid email address!",
                // },
              ]}
            >
              <Input placeholder="Input email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                placeholder="Input password"
                autoComplete="current-password"
              />
            </Form.Item>

            <Form.Item className={styles.buttonWrapper}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                style={{ paddingTop: "6px" }}
                className={styles.antBtn}
              >
                <>Log In {ArrowRight}</>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
