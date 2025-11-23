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

export const GoRepoPush = (props: IconProps) => {
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
        <Path d="M5.75 0A2.75 2.75 0 0 0 3 2.75v16.5A2.75 2.75 0 0 0 5.75 22h10a.75.75 0 0 0 0-1.5h-10c-.69 0-1.25-.56-1.25-1.25V18A1.5 1.5 0 0 1 6 16.5h6.25a.75.75 0 0 0 0-1.5H6c-.546 0-1.059.146-1.5.401V2.75c0-.69.56-1.25 1.25-1.25H19.5v7a.75.75 0 0 0 1.5 0V.75a.75.75 0 0 0-.75-.75z" />
        <Path d="m20 13.903 2.202 2.359a.75.75 0 0 0 1.096-1.024l-3.5-3.75a.75.75 0 0 0-1.096 0l-3.5 3.75a.75.75 0 1 0 1.096 1.024l2.202-2.36v9.348a.75.75 0 0 0 1.5 0z" />
      </G>
    </Svg>
  );
};