// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 68wGqrWvUbUk9uG76N3xHk
// Component: VngmHdU9aX0
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_acc_tez_wizard.module.css"; // plasmic-import: 68wGqrWvUbUk9uG76N3xHk/projectcss
import sty from "./PlasmicInputNumber.module.css"; // plasmic-import: VngmHdU9aX0/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: M1v116-IU5V/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: gYo0rjvqId9/icon

export type PlasmicInputNumber__VariantMembers = {
  showStartIcon: "showStartIcon";
  showEndIcon: "showEndIcon";
  isDisabled: "isDisabled";
  color: "dark";
};

export type PlasmicInputNumber__VariantsArgs = {
  showStartIcon?: SingleBooleanChoiceArg<"showStartIcon">;
  showEndIcon?: SingleBooleanChoiceArg<"showEndIcon">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<"dark">;
};

type VariantPropType = keyof PlasmicInputNumber__VariantsArgs;
export const PlasmicInputNumber__VariantProps = new Array<VariantPropType>(
  "showStartIcon",
  "showEndIcon",
  "isDisabled",
  "color"
);

export type PlasmicInputNumber__ArgsType = {
  placeholder?: string;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  value?: any;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

type ArgPropType = keyof PlasmicInputNumber__ArgsType;
export const PlasmicInputNumber__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "endIcon",
  "startIcon",
  "value",
  "name",
  "required",
  "aria-label",
  "aria-labelledby"
);

export type PlasmicInputNumber__OverridesType = {
  root?: p.Flex<"div">;
  startIconContainer?: p.Flex<"div">;
  input?: p.Flex<"input">;
  endIconContainer?: p.Flex<"div">;
};

export interface DefaultInputNumberProps extends pp.BaseTextInputProps {
  placeholder?: string;
  value?: any;
  name?: string;
  required?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  color?: SingleChoiceArg<"dark">;
}

export const defaultInputNumber__Args: Partial<PlasmicInputNumber__ArgsType> = {
  placeholder: "Input" as const
};

function PlasmicInputNumber__RenderFunc(props: {
  variants: PlasmicInputNumber__VariantsArgs;
  args: PlasmicInputNumber__ArgsType;
  overrides: PlasmicInputNumber__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const args = Object.assign({}, defaultInputNumber__Args, props.args);
  const $props = args;
  const $ctx = ph.useDataEnv?.() || {};

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });

  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
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
        sty.root,
        {
          [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.rootcolor_dark]: hasVariant(variants, "color", "dark"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
      data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
    >
      {(
        hasVariant(variants, "showStartIcon", "showStartIcon") ? true : true
      ) ? (
        <div
          data-plasmic-name={"startIconContainer"}
          data-plasmic-override={overrides.startIconContainer}
          className={classNames(projectcss.all, sty.startIconContainer, {
            [sty.startIconContainer___focusVisibleWithin]:
              triggers.focusVisibleWithin_root,
            [sty.startIconContainercolor_dark]: hasVariant(
              variants,
              "color",
              "dark"
            ),
            [sty.startIconContainerisDisabled]: hasVariant(
              variants,
              "isDisabled",
              "isDisabled"
            ),
            [sty.startIconContainershowStartIcon]: hasVariant(
              variants,
              "showStartIcon",
              "showStartIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <SearchsvgIcon
                className={classNames(projectcss.all, sty.svg__xiB6E)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_dark]: hasVariant(
                variants,
                "color",
                "dark"
              ),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })}
        </div>
      ) : null}

      <input
        data-plasmic-name={"input"}
        data-plasmic-override={overrides.input}
        aria-label={args["aria-label"]}
        aria-labelledby={args["aria-labelledby"]}
        className={classNames(projectcss.all, projectcss.input, sty.input, {
          [sty.input___focusVisibleWithin]: triggers.focusVisibleWithin_root,
          [sty.inputcolor_dark]: hasVariant(variants, "color", "dark"),
          [sty.inputisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),
          [sty.inputshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        })}
        disabled={
          hasVariant(variants, "isDisabled", "isDisabled") ? true : undefined
        }
        name={args.name}
        placeholder={args.placeholder}
        required={args.required}
        type={"number" as const}
        value={args.value}
      />

      {(hasVariant(variants, "showEndIcon", "showEndIcon") ? true : true) ? (
        <div
          data-plasmic-name={"endIconContainer"}
          data-plasmic-override={overrides.endIconContainer}
          className={classNames(projectcss.all, sty.endIconContainer, {
            [sty.endIconContainercolor_dark]: hasVariant(
              variants,
              "color",
              "dark"
            ),
            [sty.endIconContainershowEndIcon]: hasVariant(
              variants,
              "showEndIcon",
              "showEndIcon"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <ChecksvgIcon
                className={classNames(projectcss.all, sty.svg__w2BuA)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_dark]: hasVariant(
                variants,
                "color",
                "dark"
              ),
              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              )
            })
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseTextInputProps>(
  props: P,
  ref: pp.TextInputRef
) {
  return pp.useTextInput<P, typeof PlasmicInputNumber>(
    PlasmicInputNumber,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root",
      input: "input"
    },

    ref
  );
}

const PlasmicDescendants = {
  root: ["root", "startIconContainer", "input", "endIconContainer"],
  startIconContainer: ["startIconContainer"],
  input: ["input"],
  endIconContainer: ["endIconContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  startIconContainer: "div";
  input: "input";
  endIconContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInputNumber__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInputNumber__VariantsArgs;
    args?: PlasmicInputNumber__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInputNumber__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicInputNumber__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicInputNumber__ArgProps,
      internalVariantPropNames: PlasmicInputNumber__VariantProps
    });

    return PlasmicInputNumber__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInputNumber";
  } else {
    func.displayName = `PlasmicInputNumber.${nodeName}`;
  }
  return func;
}

export const PlasmicInputNumber = Object.assign(
  // Top-level PlasmicInputNumber renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    startIconContainer: makeNodeComponent("startIconContainer"),
    input: makeNodeComponent("input"),
    endIconContainer: makeNodeComponent("endIconContainer"),

    // Metadata about props expected for PlasmicInputNumber
    internalVariantProps: PlasmicInputNumber__VariantProps,
    internalArgProps: PlasmicInputNumber__ArgProps,

    useBehavior
  }
);

export default PlasmicInputNumber;
/* prettier-ignore-end */
