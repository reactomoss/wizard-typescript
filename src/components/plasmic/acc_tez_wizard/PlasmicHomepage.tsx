// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68wGqrWvUbUk9uG76N3xHk
// Component: mBD5GJn-hYl-
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: UCG438gq_ly/component
import Timeline from "../../Timeline"; // plasmic-import: 0RHyvgnmPT/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_acc_tez_wizard.module.css"; // plasmic-import: 68wGqrWvUbUk9uG76N3xHk/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mBD5GJn-hYl-/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gYo0rjvqId9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: XoAtNs3eY9L/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {
  timeline?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>("timeline");

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  text?: p.Flex<"div">;
  nextButton?: p.Flex<typeof Button>;
  timeline?: p.Flex<typeof Timeline>;
};

export interface DefaultHomepageProps {
  timeline?: React.ReactNode;
  className?: string;
}

export const defaultHomepage__Args: Partial<PlasmicHomepage__ArgsType> = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultHomepage__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__qIqrg)}>
              <div className={classNames(projectcss.all, sty.freeBox__m8OFk)}>
                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"Welcome to  Acctez Wizard"}
                </h1>

                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {
                    "AccTez wizard will guide you step-by-step through the setup process.\n\nOnce you complete these steps, your Acctez solution will be ready to use and the next time you visit this site, it will show the user view. \n\nPlease follow these steps to set up Acctez for your organization. \n"
                  }
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__xKeRw)}>
                  <Button
                    data-plasmic-name={"nextButton"}
                    data-plasmic-override={overrides.nextButton}
                    className={classNames("__wab_instance", sty.nextButton)}
                  >
                    {"Next"}
                  </Button>
                </div>
              </div>
            </div>

            <div className={classNames(projectcss.all, sty.column__o1Xbh)}>
              <Timeline
                data-plasmic-name={"timeline"}
                data-plasmic-override={overrides.timeline}
                className={classNames("__wab_instance", sty.timeline)}
                timeline={p.renderPlasmicSlot({
                  defaultContents: null,
                  value: args.timeline
                })}
              />
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "columns", "h1", "text", "nextButton", "timeline"],
  columns: ["columns", "h1", "text", "nextButton", "timeline"],
  h1: ["h1"],
  text: ["text"],
  nextButton: ["nextButton"],
  timeline: ["timeline"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  columns: "div";
  h1: "h1";
  text: "div";
  nextButton: typeof Button;
  timeline: typeof Timeline;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    nextButton: makeNodeComponent("nextButton"),
    timeline: makeNodeComponent("timeline"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
