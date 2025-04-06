import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../../utils/cn';

type VariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'small'
  | 'muted';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: VariantType;
  asChild?: boolean;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = 'body', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : getTagFromVariant(variant);
    const variantClasses = getVariantClasses(variant);

    return React.createElement(Comp, {
      className: cn(variantClasses, className),
      ref,
      ...props
    });
  }
);
Typography.displayName = 'Typography';

function getTagFromVariant(variant: VariantType): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return variant as keyof JSX.IntrinsicElements;
    case 'body':
    case 'small':
    case 'muted':
    default:
      return 'p';
  }
}

function getVariantClasses(variant: VariantType): string {
  switch (variant) {
    case 'h1':
      return 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
    case 'h2':
      return 'scroll-m-20 text-3xl font-semibold tracking-tight';
    case 'h3':
      return 'scroll-m-20 text-2xl font-semibold tracking-tight';
    case 'h4':
      return 'scroll-m-20 text-xl font-semibold tracking-tight';
    case 'h5':
      return 'scroll-m-20 text-lg font-semibold tracking-tight';
    case 'h6':
      return 'scroll-m-20 text-base font-semibold tracking-tight';
    case 'body':
      return 'leading-7';
    case 'small':
      return 'text-sm font-medium leading-none';
    case 'muted':
      return 'text-sm text-muted-foreground';
    default:
      return '';
  }
}

export { Typography };
