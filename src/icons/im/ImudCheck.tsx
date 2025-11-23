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

export const ImudCheck = (props: IconProps) => {
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
        <Path d="M13.942 8.039q.057-.261.058-.539a2.5 2.5 0 0 0-3.143-2.416 3 3 0 0 0-5.737.075A4 4 0 1 0 4 13h9.5a2.5 2.5 0 0 0 .442-4.961M6.5 12 4 9.5l1-1L6.5 10 10 6.5l1 1z" />
      </G>
    </Svg>
  );
};