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

export const TfiControlForward = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 2.436v12.136l7.281-6.098zm1 2.128 4.719 3.913L4 12.429zm11.281 3.91-6.46 5.41-.643-.768 5.54-4.639-5.537-4.592.639-.77z" />
      </G>
    </Svg>
  );
};