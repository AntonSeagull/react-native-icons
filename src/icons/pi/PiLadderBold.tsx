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

export const PiLadderBold = (props: IconProps) => {
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
        <Path d="M219.27 211.9 168.77 73l7.63-21h7.6a12 12 0 0 0 0-24H88a12 12 0 0 0-1.11 23.94l-58.16 160a12 12 0 0 0 7.17 15.37 11.8 11.8 0 0 0 4.1.69 12 12 0 0 0 11.28-7.9L60 196h38.5l-5.78 15.9a12 12 0 0 0 7.18 15.37 11.8 11.8 0 0 0 4.1.73 12 12 0 0 0 11.28-7.9l17.49-48.1h46.46l17.49 48.1A12 12 0 0 0 208 228a11.8 11.8 0 0 0 4.1-.73 12 12 0 0 0 7.17-15.37M124.69 124H86.22L95 100h38.46Zm17.45-48h-38.46l8.73-24h38.46Zm-73.37 96 8.73-24H116l-8.73 24Zm72.73-24 14.5-39.89L170.5 148Z" />
      </G>
    </Svg>
  );
};