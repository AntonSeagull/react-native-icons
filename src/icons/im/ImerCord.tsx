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

export const ImerCord = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 4.414 14.586 3l-2.793 2.793-1.586-1.586L13 1.414 11.586 0 8.793 2.793 7 1 5.646 2.353l8 8L15 9l-1.793-1.793zM12.407 10.528 5.472 3.593C3.975 5.388 2.276 8.163 3.45 10.55l-2.066 2.066a1.254 1.254 0 0 0 0 1.768l.232.232a1.254 1.254 0 0 0 1.768 0L5.45 12.55c2.387 1.174 5.161-.524 6.957-2.022" />
      </G>
    </Svg>
  );
};