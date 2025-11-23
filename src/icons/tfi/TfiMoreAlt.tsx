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

export const TfiMoreAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 4 8m4.5-2a2 2 0 1 0 .001 4.001A2 2 0 0 0 8.5 6M15 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 15 6" />
      </G>
    </Svg>
  );
};