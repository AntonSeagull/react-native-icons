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

export const TiWaves = (props: IconProps) => {
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
        <Path d="M15 19a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.25 3.25 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 19m0-4a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.25 3.25 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 15m0-4a5.23 5.23 0 0 1-3.707-1.532 3.246 3.246 0 0 0-4.586 0 .999.999 0 1 1-1.414-1.414 5.25 5.25 0 0 1 7.414 0 3.25 3.25 0 0 0 4.586 0 .999.999 0 1 1 1.414 1.414A5.23 5.23 0 0 1 15 11" />
      </G>
    </Svg>
  );
};