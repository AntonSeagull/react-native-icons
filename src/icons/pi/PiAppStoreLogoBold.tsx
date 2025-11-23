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

export const PiAppStoreLogoBold = (props: IconProps) => {
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
        <Path d="M244 160a12 12 0 0 1-12 12h-31.33l17.66 29.89a12 12 0 1 1-20.66 12.21L140.9 118a12 12 0 0 1 20.66-12.2l24.92 42.2H232a12 12 0 0 1 12 12m-110.85-12H97.39l64.94-109.89a12 12 0 1 0-20.66-12.21L128 49l-13.67-23.1a12 12 0 1 0-20.66 12.21l20.39 34.51L69.52 148H24a12 12 0 0 0 0 24h109.15a12 12 0 0 0 0-24m-74.32 41.67a12 12 0 0 0-16.43 4.22l-4.73 8a12 12 0 1 0 20.66 12.21l4.73-8a12 12 0 0 0-4.23-16.43" />
      </G>
    </Svg>
  );
};