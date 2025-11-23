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

export const FcSupport = (props: IconProps) => {
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
        <Path fill="#607D8B" d="M44.7 11 36 19.6s-2.6 0-5.2-2.6-2.6-5.2-2.6-5.2l8.7-8.7c-4.9-1.2-10.8.4-14.4 4-5.4 5.4-.6 12.3-2 13.7C12.9 28.7 5.1 34.7 4.9 35c-2.3 2.3-2.4 6-.2 8.2s5.9 2.1 8.2-.2c.3-.3 6.7-8.4 14.2-15.9 1.4-1.4 8 3.7 13.6-1.8 3.5-3.6 5.2-9.4 4-14.3M9.4 41.1c-1.4 0-2.5-1.1-2.5-2.5C6.9 37.1 8 36 9.4 36s2.5 1.1 2.5 2.5-1.1 2.6-2.5 2.6" />
      </G>
    </Svg>
  );
};