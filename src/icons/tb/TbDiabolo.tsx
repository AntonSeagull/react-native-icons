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

export const TbDiabolo = (props: IconProps) => {
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
        <Path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
        <Path d="M4 6v.143a1 1 0 0 0 .048.307L6 12l-1.964 5.67a1 1 0 0 0-.036.265V18c0 1.657 3.582 3 8 3s8-1.343 8-3v-.065a1 1 0 0 0-.036-.265L18 12l1.952-5.55A1 1 0 0 0 20 6.143V6" />
        <Path d="M6 12c0 1.105 2.686 2 6 2s6-.895 6-2" />
      </G>
    </Svg>
  );
};