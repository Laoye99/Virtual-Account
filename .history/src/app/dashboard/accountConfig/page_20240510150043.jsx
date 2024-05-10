"use client";

import React from "react";
import DetailsView from "@/src/components/loanrequest/channel";

function AccountConfig({params}) {
  const channel = params.channel;
  return (
    <>
      <DetailsView channel={channel} />
    </>
  );
}

export default AccountConfig;
