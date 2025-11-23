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

export const RiAlibabaCloudFill = (props: IconProps) => {
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
        <Path d="M9.514 5.14H4.68A3.68 3.68 0 0 0 1 8.82v6.358a3.68 3.68 0 0 0 3.68 3.68h4.85L8.36 17.2 4.822 16.12a1.54 1.54 0 0 1-1.07-1.472V9.37A1.53 1.53 0 0 1 4.822 7.9l3.536-1.104zm9.825 0h-4.85l1.17 1.656L19.195 7.9a1.53 1.53 0 0 1 1.067 1.471v5.277a1.535 1.535 0 0 1-1.067 1.472L15.66 17.2l-1.17 1.656h4.85a3.66 3.66 0 0 0 3.66-3.68V8.82a3.68 3.68 0 0 0-3.66-3.68m-3.672 5.998h-7.33v1.652h7.33z" />
      </G>
    </Svg>
  );
};