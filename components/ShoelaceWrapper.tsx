"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";
import * as ShoelaceComponents from "@shoelace-style/shoelace/dist/react";

type ShoelaceComponentName = keyof typeof ShoelaceComponents;

export function createShoelaceWrapper<T extends ShoelaceComponentName>(
  componentName: T
): ComponentType<React.ComponentProps<(typeof ShoelaceComponents)[T]>> {
  return dynamic(
    () =>
      import("@shoelace-style/shoelace/dist/react").then(
        (mod) => mod[componentName] as ComponentType<any>
      ),
    {
      ssr: false,
      loading: () => <span>Loading...</span>,
    }
  );
}

export const SlButton = createShoelaceWrapper("SlButton");
export const SlInput = createShoelaceWrapper("SlInput");
export const SlIconButton = createShoelaceWrapper("SlIconButton");
export const SlButtonGroup = createShoelaceWrapper("SlButtonGroup");
export const SlMenu = createShoelaceWrapper("SlMenu");
export const SlDrawer = createShoelaceWrapper("SlDrawer");
export const SlMenuItem = createShoelaceWrapper("SlMenuItem");
export const SlDivider = createShoelaceWrapper("SlDivider");
export const SlCard = createShoelaceWrapper("SlCard");
