"use client";

import { useState, useEffect } from "react";
import aggregator from "/src/assets/aggregator.svg";
import channels from "/src/assets/channels.svg";
// import dataproducts from "@/src/assets/dataproducts.svg";
// import switchsequence from "@/src/assets/switch.svg";
// import timetable from "@/src/assets/timetable.svg";
import styles from "/src/components/multiStepDashboard/dashboard.module.scss";
import Sidebar from "/src/components/Sidebar";
import DashboardHeader from "/src/components/DashboardHeader";
// import Data from "@/src/assets/data.svg"
import Profile from "/src/assets/profile.svg"
import { useAuth } from "/src/context/AppContext";



export default function RootLayout({ children }) {
  const [selectedStepLabel, setSelectedStepLabel] = useState("Channel");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [step, setStep] = useState(0);
  const { user } = useAuth();
  const roleUSer = user?.details?.role

const baseMenuItems = [
  {
    label: "Account Configuration",
    itemIcon: channels,
    stepNumber: 0,
    pageUrl: "/dashboard",
  },
  {
    label: "Service Provider",
    itemIcon: aggregator,
    stepNumber: 1,
    pageUrl: "/dashboard/serviceProvider",
  },
  
  // {
  //   label: "Time Tables",
  //   itemIcon: dataproducts,
  //   stepNumber: 3,
  //   pageUrl: "/dashboard/dataproducts",
  // },
  // {
  //   label: "Switch Sequence",
  //   itemIcon: switchsequence,
  //   stepNumber: 4,
  //   pageUrl: "/dashboard/sequence",
  // },
  // {
  //   label: "Data Products",
  //   itemIcon: Data,
  //   stepNumber: 5,
  //   pageUrl: "/dashboard/products",
  // },
  // {
  //   label: "Aggregator Response Map",
  //   itemIcon:  channels,
  //   stepNumber: 6,
  //   pageUrl: "/dashboard/responseMap",
  // },
]

// if (roleUSer === "INITIATOR" || roleUSer === "ADMIN") {
//   baseMenuItems.splice(2, 0, {
//     label: "Time Table Upload",
//     itemIcon: timetable,
//     stepNumber: 2,
//     pageUrl: "/dashboard/timetable",
//   });
// }

if (roleUSer === "ADMIN") {
  baseMenuItems.splice(7, 0, {
    label: "Manage User",
    itemIcon: Profile,
    stepNumber: 7,
    pageUrl: "/dashboard/users",
  });
}

  const menuItems = [...baseMenuItems];

  const handleMenuItemClick = (stepNumber, stepLabel) => {
    setStep(stepNumber);
    setSelectedStepLabel(stepLabel);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.MultiStepForm}>
        <div
          className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
        >
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            step={step}
            toggleSidebar={toggleSidebar}
            onMenuItemClick={handleMenuItemClick}
            menuItems={menuItems}
          />
          <div
            className={`overlay ${isSidebarOpen ? "open" : ""}`}
            onClick={toggleSidebar}
          ></div>
        </div>
        <main className={styles.contentContainer}>
          <DashboardHeader
            selectedStepLabel={selectedStepLabel}
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          {children}
        </main>
      </div>
    </section>
  );
}
