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

export const PiEqualizerLight = (props: IconProps) => {
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
        <Path d="M78 96a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6m-6 26H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32H24a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-64h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m80-96h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m-48-20h48a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12m48 52h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12m0 32h-48a6 6 0 0 0 0 12h48a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};