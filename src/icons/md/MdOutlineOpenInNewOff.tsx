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

export const MdOutlineOpenInNewOff = (props: IconProps) => {
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
        <Path d="M16.79 5.8 14 3h7v7l-2.79-2.8-4.09 4.09-1.41-1.41zM19 12v4.17l2 2V12zm.78 10.61L18.17 21H5a2 2 0 0 1-2-2V5.83L1.39 4.22 2.8 2.81l18.38 18.38zM16.17 19l-4.88-4.88-1.59 1.59-1.41-1.41 1.59-1.59L5 7.83V19zM7.83 5H12V3H5.83z" />
      </G>
    </Svg>
  );
};