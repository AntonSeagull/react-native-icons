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

export const IoKeypad = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 400a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M256 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M384 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48M128 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48" />
      </G>
    </Svg>
  );
};