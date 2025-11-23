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

export const RiExpandVerticalSLine = (props: IconProps) => {
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
        <Path d="M16.95 7.45 12 2.5 7.051 7.447 8.466 8.86 11 6.328V17.67l-2.536-2.535L7.05 16.55 12 21.5l4.95-4.95-1.414-1.414L13 17.672V6.328l2.535 2.535z" />
      </G>
    </Svg>
  );
};