"use client";

import React from "react";
import AccountConfig from "/src/components/loanrequest";
function ServiceProviders({params}) {
  const channel = params.channel;
  return (
    <>
    <DetailsView channel={channel} />
    </>
  );
}

export default ServiceProviders;
