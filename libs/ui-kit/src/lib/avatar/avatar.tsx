import { ComponentProps } from "react";
import { getInitials } from "../utils/getInitials";
import { Tooltip } from "../tooltip";
import styles from "./avatar.module.scss";
import { clsx } from "clsx";


const DEFAULT_SIZE = 24;
const DEFAULT_NAME = '...';
const DEFAULT_COLOR = '#000';
const FONT_SIZE_FACTOR = 0.36;

export interface Props extends Omit<ComponentProps<"div">, "color"> {
  src?: string;
  name: string;
  size?: number;
  color?: string;
  outline?: boolean;
  tooltip?: boolean;
  tooltipProps?: Omit<ComponentProps<typeof Tooltip>, "children" | "content">;
}

interface EllipsisProps extends ComponentProps<"div"> {
  ellipsis: number;
  size?: number;
  outline?: boolean;
  tooltip?: boolean;
  tooltipProps?: Omit<ComponentProps<typeof Tooltip>, "children" | "content">;
}

export function Avatar({
  size = DEFAULT_SIZE,
  name = DEFAULT_NAME,
  color = DEFAULT_COLOR,
  outline = false,
  tooltip = false,
  tooltipProps,
  className,
  style,
  ...props
}: Props) {
  const content = (
    <div
      className={clsx(
        styles.avatar,
        className,
        outline && styles.avatarOutline
      )}
      style={{ width: size, height: size, color, ...style }}
      aria-label={name}
      {...props}
    >
      <span
        style={{ fontSize: size * FONT_SIZE_FACTOR }}
        className={styles.label}
        aria-hidden
      >
        {getInitials(name)}
      </span>
    </div>
  );

  return tooltip ? (
    <Tooltip content={name} {...tooltipProps}>
      {content}
    </Tooltip>
  ) : (
    content
  );
}

export function AvatarEllipsis({
  ellipsis,
  size = DEFAULT_SIZE,
  outline = false,
  tooltip = false,
  tooltipProps,
  className,
  style,
  ...props
}: EllipsisProps) {
  const content = (
    <div
      className={clsx(
        styles.avatar,
        className,
        outline && styles.avatarOutline
      )}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      <span
        style={{ fontSize: size * FONT_SIZE_FACTOR }}
        className={styles.label}
      >
        +{ellipsis}
      </span>
    </div>
  );

  return tooltip ? (
    <Tooltip
      content={`${ellipsis} other${ellipsis > 1 ? "s" : ""}`}
      {...tooltipProps}
    >
      {content}
    </Tooltip>
  ) : (
    content
  );
}
