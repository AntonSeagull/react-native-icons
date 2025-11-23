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

export const PiLegoSmileyBold = (props: IconProps) => {
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
        <Path d="M84 112a16 16 0 1 1 16 16 16 16 0 0 1-16-16m72-16a16 16 0 1 0 16 16 16 16 0 0 0-16-16m-6.4 45.85a41 41 0 0 1-43.2 0 12 12 0 1 0-12.8 20.3 65 65 0 0 0 68.8 0 12 12 0 1 0-12.8-20.3M220 84v88a36.07 36.07 0 0 1-24 33.94V224a20 20 0 0 1-20 20H80a20 20 0 0 1-20-20v-18.06A36.07 36.07 0 0 1 36 172V84a36 36 0 0 1 36-36h12V32a20 20 0 0 1 20-20h48a20 20 0 0 1 20 20v16h12a36 36 0 0 1 36 36M108 48h40V36h-40Zm64 172v-12H84v12Zm24-136a12 12 0 0 0-12-12H72a12 12 0 0 0-12 12v88a12 12 0 0 0 12 12h112a12 12 0 0 0 12-12Z" />
      </G>
    </Svg>
  );
};