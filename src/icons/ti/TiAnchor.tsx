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

export const TiAnchor = (props: IconProps) => {
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
        <Path d="M18 13.5a1 1 0 0 0-1 1 5.01 5.01 0 0 1-4 4.898V12h4a1 1 0 1 0 0-2h-4V8.816A2.99 2.99 0 0 0 15 6a3 3 0 1 0-6 0 2.99 2.99 0 0 0 2 2.816V10H7a1 1 0 1 0 0 2h4v7.398A5.01 5.01 0 0 1 7 14.5a1 1 0 1 0-2 0c0 3.859 3.141 7 7 7s7-3.141 7-7a1 1 0 0 0-1-1M12 5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1" />
      </G>
    </Svg>
  );
};