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

export const SiBaremetrics = (props: IconProps) => {
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
        <Path d="m22.109 7.951 1.485 2.464a3.5 3.5 0 0 1 0 3.275l-4.505 7.717a3.33 3.33 0 0 1-2.94 1.793H7.83a3.34 3.34 0 0 1-2.94-1.793l-1.555-2.632 6.139-5.695 4.447 2.578a1.093 1.093 0 0 0 1.456-.198zm-13.39.628L1.99 16.15.406 13.725a3.5 3.5 0 0 1 0-3.27L5.158 2.59A3.34 3.34 0 0 1 8.1.8h8.008c1.228 0 2.357.687 2.942 1.79l1.616 2.722-6.017 5.592-4.432-2.574a1.1 1.1 0 0 0-1.499.248z" />
      </G>
    </Svg>
  );
};