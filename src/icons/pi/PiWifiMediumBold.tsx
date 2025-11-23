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

export const PiWifiMediumBold = (props: IconProps) => {
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
        <Path d="M144 204a16 16 0 1 1-16-16 16 16 0 0 1 16 16m63.45-84.36a128 128 0 0 0-158.9 0 12 12 0 0 0 14.9 18.81 104 104 0 0 1 129.1 0 12 12 0 0 0 14.9-18.81m-32.38 35.66a80.05 80.05 0 0 0-94.14 0 12 12 0 0 0 14.14 19.4 56 56 0 0 1 65.86 0 12 12 0 1 0 14.14-19.4" />
      </G>
    </Svg>
  );
};