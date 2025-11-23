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

export const PiTildeLight = (props: IconProps) => {
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
        <Path d="M220.68 129.34c-14.17 17.62-28.06 26.92-42.46 28.44a41 41 0 0 1-4.22.22c-18.64 0-34.44-12.87-49.76-25.35S94.57 108.51 79 110.16c-11.06 1.16-22.3 9-34.36 24a6 6 0 1 1-9.36-7.52c14.17-17.61 28.06-26.92 42.46-28.43 20.52-2.18 37.54 11.7 54 25.12 15.26 12.43 29.68 24.15 45.26 22.51 11.06-1.16 22.3-9 34.36-24a6 6 0 0 1 9.36 7.52Z" />
      </G>
    </Svg>
  );
};