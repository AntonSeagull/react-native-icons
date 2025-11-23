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

export const PiArrowURightDownLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m220.24 180.24-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L162 209.51V88a50 50 0 0 0-100 0v88a6 6 0 0 1-12 0V88a62 62 0 0 1 124 0v121.51l37.76-37.75a6 6 0 0 1 8.48 8.48" />
      </G>
    </Svg>
  );
};