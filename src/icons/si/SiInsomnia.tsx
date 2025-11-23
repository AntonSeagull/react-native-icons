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

export const SiInsomnia = (props: IconProps) => {
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
        <Path d="M12.136 3.458a8.542 8.542 0 1 1-7.9 5.286A3.322 3.322 0 1 0 8.88 4.1a8.5 8.5 0 0 1 3.256-.642M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 1.22c5.953 0 10.78 4.827 10.78 10.78S17.953 22.78 12 22.78 1.22 17.953 1.22 12 6.047 1.22 12 1.22" />
      </G>
    </Svg>
  );
};