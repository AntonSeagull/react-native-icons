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

export const LiaSistrix = (props: IconProps) => {
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
        <Path d="M12.5 3C7.262 3 3 7.262 3 12.5S7.262 22 12.5 22a9.45 9.45 0 0 0 5.967-2.12l9.16 9.161 1.414-1.414-9.16-9.16A9.45 9.45 0 0 0 22 12.5C22 7.262 17.738 3 12.5 3m0 2c4.136 0 7.5 3.364 7.5 7.5S16.636 20 12.5 20 5 16.636 5 12.5 8.364 5 12.5 5" />
      </G>
    </Svg>
  );
};