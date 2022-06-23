// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68wGqrWvUbUk9uG76N3xHk
// Component: mI1RRebNRD
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
import Checkbox from "../../Checkbox"; // plasmic-import: NK-xeF1iGEb/component

import { useScreenVariants as useScreenVariantsvuY9FrfZklWci } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: vuY9frfZKLWci/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_acc_tez_wizard.module.css"; // plasmic-import: 68wGqrWvUbUk9uG76N3xHk/projectcss
import sty from "./PlasmicMain.module.css"; // plasmic-import: mI1RRebNRD/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gYo0rjvqId9/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: XoAtNs3eY9L/icon

export type PlasmicMain__VariantMembers = {};

export type PlasmicMain__VariantsArgs = {};
type VariantPropType = keyof PlasmicMain__VariantsArgs;
export const PlasmicMain__VariantProps = new Array<VariantPropType>();

export type PlasmicMain__ArgsType = {};
type ArgPropType = keyof PlasmicMain__ArgsType;
export const PlasmicMain__ArgProps = new Array<ArgPropType>();

export type PlasmicMain__OverridesType = {
  root?: p.Flex<"div">;
  menu?: p.Flex<"div">;
  acctez?: p.Flex<"h1">;
  columns?: p.Flex<"div">;
};

export interface DefaultMainProps {
  className?: string;
}

export const defaultMain__Args: Partial<PlasmicMain__ArgsType> = {};

function PlasmicMain__RenderFunc(props: {
  variants: PlasmicMain__VariantsArgs;
  args: PlasmicMain__ArgsType;
  overrides: PlasmicMain__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultMain__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsvuY9FrfZklWci()
  });

  return (
    <React.Fragment>
      {}
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <div
            data-plasmic-name={"menu"}
            data-plasmic-override={overrides.menu}
            className={classNames(projectcss.all, sty.menu)}
          >
            <h1
              data-plasmic-name={"acctez"}
              data-plasmic-override={overrides.acctez}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.acctez
              )}
            >
              {"AccTez "}
            </h1>

            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__gvr97
                )}
              >
                {"Access Control with Tezos"}
              </div>
            ) : null}

            <Button
              className={classNames("__wab_instance", sty.button__rCsHq)}
              color={"blue" as const}
              shape={"rounded" as const}
            >
              {"Sync"}
            </Button>
          </div>

          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__k0VJh)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3FYu4
                )}
              >
                {"Buy a Pass"}
              </div>

              <Button
                className={classNames("__wab_instance", sty.button__i0ACe)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Special Event Pass"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__nzDri)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Day Pass"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__h3WxU)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Week Pass"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__tFbFt)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Yearly Pass"}
              </Button>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.column__wLjh4)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__fYyJ
                )}
              >
                {"Your Status"}
              </div>

              <Checkbox
                className={classNames("__wab_instance", sty.checkbox__q0KSf)}
                isDisabled={true}
              >
                {"You Own Special Event Pass"}
              </Checkbox>

              <Checkbox
                className={classNames("__wab_instance", sty.checkbox__v7Bru)}
                isDisabled={true}
              >
                {"You Own Day Pass"}
              </Checkbox>

              <Checkbox
                className={classNames("__wab_instance", sty.checkbox__cjaZ)}
                isDisabled={true}
              >
                {"You Own Weekly Pass"}
              </Checkbox>

              <Checkbox
                className={classNames("__wab_instance", sty.checkbox__pgZh5)}
                isDisabled={true}
              >
                {"You Own Yearly Pass"}
              </Checkbox>

              <Button
                className={classNames("__wab_instance", sty.button___2PGe4)}
                color={"blue" as const}
                shape={"rounded" as const}
              >
                {"Add Ticket to Apple Wallet"}
              </Button>
            </p.Stack>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "menu", "acctez", "columns"],
  menu: ["menu", "acctez"],
  acctez: ["acctez"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  menu: "div";
  acctez: "h1";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMain__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMain__VariantsArgs;
    args?: PlasmicMain__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMain__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMain__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicMain__ArgProps,
      internalVariantPropNames: PlasmicMain__VariantProps
    });

    return PlasmicMain__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMain";
  } else {
    func.displayName = `PlasmicMain.${nodeName}`;
  }
  return func;
}

export const PlasmicMain = Object.assign(
  // Top-level PlasmicMain renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    menu: makeNodeComponent("menu"),
    acctez: makeNodeComponent("acctez"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicMain
    internalVariantProps: PlasmicMain__VariantProps,
    internalArgProps: PlasmicMain__ArgProps
  }
);

export default PlasmicMain;
/* prettier-ignore-end */
