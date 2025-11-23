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

export const PiSpotifyLogoBold = (props: IconProps) => {
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
        <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84m66.59-84.36a12 12 0 0 1-16.24 4.93 106.7 106.7 0 0 0-100.7 0A11.8 11.8 0 0 1 72 134a12 12 0 0 1-5.66-22.58 130.61 130.61 0 0 1 123.3 0 12 12 0 0 1 4.95 16.22m-16 36a12 12 0 0 1-16.23 5 73 73 0 0 0-68.72 0 12 12 0 0 1-11.28-21.18 97 97 0 0 1 91.28 0 12 12 0 0 1 4.95 16.18" />
      </G>
    </Svg>
  );
};