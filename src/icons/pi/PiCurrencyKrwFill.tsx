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

export const PiCurrencyKrwFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m72 120h-18.58l-14 35a8 8 0 0 1-14.86 0L128 117.54 103.43 179a8 8 0 0 1-14.86 0l-14-35H56a8 8 0 0 1 0-16h12.18L56.57 99a8 8 0 1 1 14.86-6L96 154.46 120.57 93a8 8 0 0 1 14.86 0L160 154.46 184.57 93a8 8 0 1 1 14.86 6l-11.61 29H200a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};