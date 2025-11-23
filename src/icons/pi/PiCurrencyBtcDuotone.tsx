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

export const PiCurrencyBtcDuotone = (props: IconProps) => {
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
        <Path d="M200 160a40 40 0 0 1-40 40H88V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40" opacity={0.2} />
        <Path d="M178.48 115.7A44 44 0 0 0 152 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H72a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3M96 56h52a28 28 0 0 1 0 56H96Zm64 136H96v-64h64a32 32 0 0 1 0 64" />
      </G>
    </Svg>
  );
};