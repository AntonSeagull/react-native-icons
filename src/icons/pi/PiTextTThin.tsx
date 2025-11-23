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

export const PiTextTThin = (props: IconProps) => {
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
        <Path d="M204 56v32a4 4 0 0 1-8 0V60h-64v136h28a4 4 0 0 1 0 8H96a4 4 0 0 1 0-8h28V60H60v28a4 4 0 0 1-8 0V56a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};