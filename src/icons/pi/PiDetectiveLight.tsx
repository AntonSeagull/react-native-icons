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

export const PiDetectiveLight = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M248 114h-28.94L171 47.77a14 14 0 0 0-22.16-.61l-12.91 14.92a1 1 0 0 0-.14.17 10 10 0 0 1-15.58 0 1 1 0 0 0-.14-.17L107.2 47.16a14 14 0 0 0-22.2.61L36.94 114H8a6 6 0 0 0 0 12h240a6 6 0 0 0 0-12M94.75 54.82a2 2 0 0 1 3.15-.07l.15.17 12.86 14.92A21.88 21.88 0 0 0 128 78a21.88 21.88 0 0 0 17.09-8.16L158 54.92l.15-.17a2 2 0 0 1 3.15.07l43 59.18H51.77ZM180 146a34 34 0 0 0-33.94 32h-36.12a34 34 0 1 0-1.44 12h39a34 34 0 1 0 32.5-44M76 202a22 22 0 1 1 22-22 22 22 0 0 1-22 22m104 0a22 22 0 1 1 22-22 22 22 0 0 1-22 22" />
      </G>
    </Svg>
  );
};