"use client";
import React from 'react';
import { NextStudio } from "next-sanity/studio";
import config from '@/sanity.config';
import '../../globals.css';

export default function AdminPage() {
  return (
    <div className="studio-container">
      <NextStudio config={config} />
    </div>
  );
}