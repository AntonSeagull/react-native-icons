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

export const Imeld = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M15 0 8 2 1 0S.93.808 1 2l7 2.189L15 2c.07-1.192 0-2 0-2M1.128 3.049C1.503 6.966 2.901 13.553 8 16c5.099-2.448 6.497-9.034 6.872-12.951L8 5.633z" />
      </G>
    </Svg>
  );
};