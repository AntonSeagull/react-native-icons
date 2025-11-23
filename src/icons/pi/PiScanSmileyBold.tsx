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

export const PiScanSmileyBold = (props: IconProps) => {
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
        <Path d="M228 40v28a12 12 0 0 1-24 0V52h-16a12 12 0 0 1 0-24h28a12 12 0 0 1 12 12m-12 136a12 12 0 0 0-12 12v16h-16a12 12 0 0 0 0 24h28a12 12 0 0 0 12-12v-28a12 12 0 0 0-12-12M68 204H52v-16a12 12 0 0 0-24 0v28a12 12 0 0 0 12 12h28a12 12 0 0 0 0-24M40 80a12 12 0 0 0 12-12V52h16a12 12 0 0 0 0-24H40a12 12 0 0 0-12 12v28a12 12 0 0 0 12 12m88 128a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80m56-80a56 56 0 1 0-56 56 56.06 56.06 0 0 0 56-56m-80-24a16 16 0 1 0 16 16 16 16 0 0 0-16-16m48 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};