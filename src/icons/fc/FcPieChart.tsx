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

export const FcPieChart = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#00BCD4" d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18c5.2 0 9.9-2.2 13.1-5.7L24 24z" />
        <Path fill="#448AFF" d="M42 24c0-9.9-8.1-18-18-18v18z" />
        <Path fill="#3F51B5" d="m24 24 13.1 12.3c3-3.2 4.9-7.5 4.9-12.3z" />
      </G>
    </Svg>
  );
};