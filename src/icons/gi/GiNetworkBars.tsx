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

export const GiNetworkBars = (props: IconProps) => {
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
        <Path d="M428.4 27.8v456.4h60.9V27.8zM327 168.2v316h60.8v-316zM225.4 273.6v210.6h61V273.6zM124 343.8v140.4h60.9V343.8zM22.67 394.9v89.3h60.84v-89.3z" />
      </G>
    </Svg>
  );
};