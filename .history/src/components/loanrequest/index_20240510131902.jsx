"use client"
import styles from "./loanrequest.module.scss";
import addIcon from "@/src/assets/addIcon2.svg";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { LogoutIcon } from "@/src/utility/svg";
import { Dropdown, Space, Modal, Form, Button, Spin, Input, Table } from "antd";
import Link from "next/link";
import { channels } from "@/src/assets/channels.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import addIcon from "@/src/assets/addIcon.svg";
import { baseUrl } from "@/src/utility/constants";
import { useAuth } from "@/src/context/AppContext";
import { useRouter } from "next/navigation";
import { DatePicker } from 'antd';


export default function AccountConfig() {
    return (
        <div> Welcome to Account login Page</div>
    );
}