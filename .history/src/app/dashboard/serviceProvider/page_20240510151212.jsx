"use client";

import React from "react";
import DetailsView from "@/src/components/loanrequest/channel";

function ServiceProviders({params}) {
  const channel = params.channel;
  return (
    <>
    <DetailsView channel={channel} />
    </>
  );
}

export default ServiceProviders;
