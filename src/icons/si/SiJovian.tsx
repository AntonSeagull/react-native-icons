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

export const SiJovian = (props: IconProps) => {
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
        <Path d="M20.25 1.65C20.25.74 19.51 0 18.6 0H5.4c-.91 0-1.65.74-1.65 1.65v20.7c0 .91.74 1.65 1.65 1.65h13.2c.91 0 1.65-.74 1.65-1.65zm-5.275 4.341a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m.04 9.018a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-6.015 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
      </G>
    </Svg>
  );
};