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

export const PiLineSegmentBold = (props: IconProps) => {
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
        <Path d="M217.47 38.53a36 36 0 0 0-57.95 41l-80 80a36.07 36.07 0 0 0-41 7 36 36 0 1 0 58 9.95l80-80a36 36 0 0 0 41-57.95Zm-145 162a12 12 0 1 1 0-17 12 12 0 0 1 .01 16.97Zm128-128a12 12 0 0 1-17 0 12 12 0 1 1 17 0" />
      </G>
    </Svg>
  );
};