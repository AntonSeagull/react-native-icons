import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const RiRemixiconLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m6.365 6 8.784 9.663.72-.283c1.685-.661 2.864-2.156 3.092-3.896q-.23.016-.46.016A6.5 6.5 0 0 1 12.077 6zM14 5a4.5 4.5 0 0 0 6.714 3.918c.186.618.286 1.271.286 1.947 0 2.891-1.822 5.365-4.4 6.377L20 21h-17V4h11.111a4.5 4.5 0 0 0-.111 1m4.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m-13.5-.03V19h10.48z" />
      </G>
    </Svg>
  );
};