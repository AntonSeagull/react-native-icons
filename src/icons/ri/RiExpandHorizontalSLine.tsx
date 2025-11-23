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

export const RiExpandHorizontalSLine = (props: IconProps) => {
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
        <Path d="M7.45 7.05 2.5 12l4.947 4.947 1.414-1.414L6.328 13h11.343l-2.535 2.535 1.414 1.414L21.5 12l-4.95-4.95-1.414 1.415L17.672 11H6.328l2.536-2.535z" />
      </G>
    </Svg>
  );
};