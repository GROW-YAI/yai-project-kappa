"use client";

import React, { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = "boafo_5678";
    console.log('Initializing Boafo widget with API key:', BOAFO_API_KEY);
    
    try {
      initializeBoafoWidget(BOAFO_API_KEY);
      console.log('Boafo widget initialized successfully');
    } catch (error) {
      console.error('Error initializing Boafo widget:', error);
    }
  }, []);

  return null; // nothing to render
}
