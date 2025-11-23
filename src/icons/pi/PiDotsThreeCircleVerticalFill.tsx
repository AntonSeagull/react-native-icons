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

export const PiDotsThreeCircleVerticalFill = (props: IconProps) => {
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
        <Path d="M232 128a104 104 0 1 0-104 104 104.13 104.13 0 0 0 104-104M116 84a12 12 0 1 1 12 12 12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12 12 12 0 0 1-12-12m0 44a12 12 0 1 1 12 12 12 12 0 0 1-12-12" />
      </G>
    </Svg>
  );
};