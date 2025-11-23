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

export const TbRotate3d = (props: IconProps) => {
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
        <Path d="M12 3a7 7 0 0 1 7 7v4l-3-3M22 11l-3 3M8 15.5l-5-3 5-3 5 3V18l-5 3z" />
        <Path d="M3 12.5V18l5 3M8 15.545l5-3.03" />
      </G>
    </Svg>
  );
};