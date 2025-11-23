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

export const PiCurrencyKrwBold = (props: IconProps) => {
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
        <Path d="M240 124h-16.17l19.29-47.48a12 12 0 0 0-22.24-9l-23 56.51h-35.8l-23-56.51a12 12 0 0 0-22.24 0L93.92 124H58.08l-23-56.51a12 12 0 0 0-22.24 9L32.17 124H16a12 12 0 0 0 0 24h25.92l23 56.52a12 12 0 0 0 22.24 0l23-56.52H146l23 56.52a12 12 0 0 0 22.24 0l23-56.52H240a12 12 0 0 0 0-24M76 168.12 67.83 148h16.34ZM119.83 124l8.17-20.11 8.17 20.11ZM180 168.12 171.83 148h16.34Z" />
      </G>
    </Svg>
  );
};