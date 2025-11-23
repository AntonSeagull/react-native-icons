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

export const PiBinocularsLight = (props: IconProps) => {
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
        <Path d="M233 147.24 191.43 52.6a6 6 0 0 0-1.25-1.83 30 30 0 0 0-42.42 0A6 6 0 0 0 146 55v27h-36V55a6 6 0 0 0-1.76-4.25 30 30 0 0 0-42.42 0 6 6 0 0 0-1.25 1.83L23 147.24A46 46 0 1 0 110 168V94h36v74a46 46 0 1 0 87-20.76M64 202a34 34 0 1 1 34-34 34 34 0 0 1-34 34m0-80a45.8 45.8 0 0 0-18.55 3.92l29.61-67.38A18 18 0 0 1 98 57.71V137a45.9 45.9 0 0 0-34-15m94-64.28a18 18 0 0 1 22.94.83l29.61 67.37A45.9 45.9 0 0 0 158 137ZM192 202a34 34 0 1 1 34-34 34 34 0 0 1-34 34" />
      </G>
    </Svg>
  );
};