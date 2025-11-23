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

export const WiDirectionDownLeft = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 15, 15)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.83 16.77a.65.65 0 0 0 .66.67h2.87c.19 0 .35-.06.47-.19.13-.13.19-.29.19-.48a.59.59 0 0 0-.19-.46.67.67 0 0 0-.47-.18h-1.24L18 12.24c.12-.14.18-.3.18-.5a.65.65 0 0 0-.18-.46c-.12-.12-.29-.18-.5-.18q-.3 0-.48.18l-3.86 3.87V13.9a.65.65 0 0 0-.67-.67c-.19 0-.35.07-.47.2-.13.13-.19.29-.19.48z" />
      </G>
    </Svg>
  );
};