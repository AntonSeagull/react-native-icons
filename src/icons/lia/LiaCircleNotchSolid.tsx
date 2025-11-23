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

export const LiaCircleNotchSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M18 4.18v2.023c4.559.93 8 4.969 8 9.797 0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.828 3.441-8.867 8-9.797V4.18C8.336 5.137 4 10.066 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.934-4.336-10.863-10-11.82" />
      </G>
    </Svg>
  );
};