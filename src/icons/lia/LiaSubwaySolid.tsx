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

export const LiaSubwaySolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 4C7.25 4 5 6.25 5 9v12a6.01 6.01 0 0 0 3.531 5.469L6 29h2.344l2.031-2.031c.2.02.418.031.625.031h10c.207 0 .426-.012.625-.031L23.656 29H26l-2.531-2.531A6.01 6.01 0 0 0 27 21V9c0-2.75-2.25-5-5-5Zm0 2h12c1.32 0 2.438.828 2.844 2H7.156A2.99 2.99 0 0 1 10 6m-3 4h8v6H7Zm10 0h8v6h-8ZM7 18h18v3c0 2.219-1.781 4-4 4H11c-2.219 0-4-1.781-4-4Zm3.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
      </G>
    </Svg>
  );
};