"use client";

import {
  SlButton,
  SlIconButton,
  SlButtonGroup,
} from "@/components/ShoelaceWrapper";
import { Suspense } from "react";

export default function ButtonsClient() {
  return (
    <Suspense fallback={<div>Loading buttons...</div>}>
      <div className="grid gap-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Standard Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <SlButton variant="default">Default</SlButton>
            <SlButton variant="primary">Primary</SlButton>
            <SlButton variant="success">Success</SlButton>
            <SlButton variant="neutral">Neutral</SlButton>
            <SlButton variant="warning">Warning</SlButton>
            <SlButton variant="danger">Danger</SlButton>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Icon Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <SlIconButton name="gear" label="Settings" />
            <SlIconButton name="person" label="User" />
            <SlIconButton name="graph-up" label="Analytics" />
            <SlIconButton name="envelope" label="Mail" />
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Button Group</h2>
          <SlButtonGroup label="Alignment">
            <SlButton>Left</SlButton>
            <SlButton>Center</SlButton>
            <SlButton>Right</SlButton>
          </SlButtonGroup>
        </section>
      </div>
    </Suspense>
  );
}
