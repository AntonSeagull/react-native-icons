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

export const PiCurrencyNgnFill = (props: IconProps) => {
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
        <Path d="M143.55 136H160v23ZM96 120h16.45L96 97Zm136 8A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-32 0a8 8 0 0 0-8-8h-16V72a8 8 0 0 0-16 0v48h-27.88L94.51 67.35A8 8 0 0 0 80 72v48H64a8 8 0 0 0 0 16h16v48a8 8 0 0 0 16 0v-48h27.88l37.61 52.65A8 8 0 0 0 168 192a7.9 7.9 0 0 0 2.44-.38A8 8 0 0 0 176 184v-48h16a8 8 0 0 0 8-8" />
      </G>
    </Svg>
  );
};