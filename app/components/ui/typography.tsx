import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type PrimitiveProps = Omit<ComponentPropsWithoutRef<"p">, "color">;

export interface TypographyProps extends PrimitiveProps, VariantProps<typeof typography> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

const typography = cva([], {
  variants: {
    variant: {
      headingXL: ["text-[72px]", "leading-[78px]", "tracking-[-1px]"],
      headingL: ["text-[48px]", "leading-[56px]", "tracking-[-0.5px]"],
      headingM: ["text-[18px]", "leading-[32px]", "tracking-[-0.2px]"],
      headingS: ["text-[16px]", "leading-[26px]", "tracking-[-2.5px]"],
      quote: ["text-[20px]", "leading-[35px]", "tracking-[0px]"],
      body: ["text-[18px]", "leading-[32px]", "tracking-[0px]"],
      footer: ["text-[15px]", "leading-[32px]", "tracking-[0px]"],
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export const Typography = forwardRef<HTMLParagraphElement, TypographyProps>(function Typography(
  { className, as: Element = "p", variant, ...props },
  ref
) {
  return (
    <Element ref={ref} className={typography({ variant, className })} {...props} />
  );
});