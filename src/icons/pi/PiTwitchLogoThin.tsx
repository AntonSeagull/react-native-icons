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

export const PiTwitchLogoThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h20v36a4 4 0 0 0 2.3 3.62 3.9 3.9 0 0 0 1.7.38 4 4 0 0 0 2.56-.93L121.45 204h43.65a12.06 12.06 0 0 0 7.69-2.78l42.89-35.75a11.93 11.93 0 0 0 4.32-9.22V48a12 12 0 0 0-12-12m4 120.25a4 4 0 0 1-1.44 3.08l-42.9 35.74a4 4 0 0 1-2.56.93H120a4 4 0 0 0-2.56.93L76 231.46V200a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM172 88v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0m-48 0v48a4 4 0 0 1-8 0V88a4 4 0 0 1 8 0" />
      </G>
    </Svg>
  );
};