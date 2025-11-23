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

export const CiClock2 = (props: IconProps) => {
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
        <Path d="M12 21.933A9.933 9.933 0 1 1 21.933 12 9.944 9.944 0 0 1 12 21.933m0-18.866A8.933 8.933 0 1 0 20.933 12 8.943 8.943 0 0 0 12 3.067" />
        <Path d="M18 12.5h-6a.43.43 0 0 1-.34-.14c-.01 0-.01-.01-.02-.02a.43.43 0 0 1-.14-.34V6a.5.5 0 0 1 1 0v5.5H18a.5.5 0 0 1 0 1" />
      </G>
    </Svg>
  );
};