"use client";

import React, { useEffect, useState } from "react";
import HeroStageContent from "./HeroStageContent";

export default function HeroStage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <HeroStageContent />;
}
