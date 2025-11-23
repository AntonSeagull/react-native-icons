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

export const CgBowl = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M20.547 3.672a1 1 0 0 0-1.414 0l-5.364 5.364H2v2h.008c.218 5.33 4.608 9.585 9.992 9.585s9.774-4.255 9.992-9.585H22v-2h-5.403l3.95-3.95a1 1 0 0 0 0-1.414m-6.37 7.364h5.813a8 8 0 0 1-15.98 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};