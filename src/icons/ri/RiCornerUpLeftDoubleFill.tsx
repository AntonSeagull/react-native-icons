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

export const RiCornerUpLeftDoubleFill = (props: IconProps) => {
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
        <Path d="M20 19v-9h-5.586V4.586L8 11l6.414 6.414V12H18v7zM10.164 6.05 8.75 4.636 2.386 11l6.364 6.364 1.414-1.414L5.214 11z" />
      </G>
    </Svg>
  );
};