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

export const PiStarOfDavidBold = (props: IconProps) => {
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
        <Path d="m205.82 128 28.6-50A12 12 0 0 0 224 60h-57l-28.55-50A12 12 0 0 0 128 4a12 12 0 0 0-10.42 6.05L89 60H32a12 12 0 0 0-10.42 18l28.58 50-28.58 50A12 12 0 0 0 32 196h57l28.57 50a12 12 0 0 0 20.84 0L167 196h57a12 12 0 0 0 10.42-17.95Zm-2.5-44L192 103.81 180.68 84Zm-25.14 44L153 172h-50.1l-25.09-44 25.13-44H153ZM128 40.18 139.33 60h-22.67ZM52.68 84h22.61L64 103.82Zm0 87.92L64 152.18 75.29 172Zm75.32 43.9L116.66 196h22.67ZM180.68 172 192 152.19 203.32 172Z" />
      </G>
    </Svg>
  );
};