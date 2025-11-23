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

export const PiDeskLight = (props: IconProps) => {
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
        <Path d="M248 66H8a6 6 0 0 0 0 12h10v114a6 6 0 0 0 12 0v-50h196v50a6 6 0 0 0 12 0V78h10a6 6 0 0 0 0-12M30 78h92v52H30Zm196 52h-92V78h92ZM94 104a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h24a6 6 0 0 1 6 6m68 0a6 6 0 0 1 6-6h24a6 6 0 0 1 0 12h-24a6 6 0 0 1-6-6" />
      </G>
    </Svg>
  );
};