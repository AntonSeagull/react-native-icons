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

export const GrEmoji = (props: IconProps) => {
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
        <Path d="M12 1.73A10.27 10.27 0 1 0 22.24 12 10.25 10.25 0 0 0 12 1.73M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9" />
        <Path d="M8.8 11.05a1.55 1.55 0 1 0-1.51-1.5 1.56 1.56 0 0 0 1.51 1.5M15.44 11.05a1.55 1.55 0 1 0 0-3.09 1.53 1.53 0 0 0-1.51 1.59 1.51 1.51 0 0 0 1.51 1.5M12.19 16.35A6.58 6.58 0 0 1 6.9 13.5a5.71 5.71 0 0 0 5.3 4 5.54 5.54 0 0 0 5.31-4 6.27 6.27 0 0 1-5.32 2.85" />
      </G>
    </Svg>
  );
};