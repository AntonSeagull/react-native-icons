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

export const GiUsbKey = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m394.8 30.88-65 65.03 86.3 86.29 65.1-65zm-6.3 36.04 17 17-12.8 12.72-17-17zm-82.8 30.4-11.3 11.28 109 108.9 11.3-11.2zM263.3 103 23.4 342.9v60.5l85.2 85.2h60.5l240-239.9zm164.9 3.6 16.9 17-12.8 12.6-16.9-17z" />
      </G>
    </Svg>
  );
};