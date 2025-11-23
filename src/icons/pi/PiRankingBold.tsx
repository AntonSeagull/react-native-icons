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

export const PiRankingBold = (props: IconProps) => {
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
        <Path d="M108.62 103.79a12 12 0 0 1 7.59-15.17l12-4A12 12 0 0 1 144 96v40a12 12 0 0 1-24 0v-24a12 12 0 0 1-11.38-8.21M252 208a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h4v-92a20 20 0 0 1 20-20h36V56a20 20 0 0 1 20-20h64a20 20 0 0 1 20 20v68h36a20 20 0 0 1 20 20v52h4a12 12 0 0 1 12 12m-72-60v48h32v-48Zm-80 48h56V60h-56Zm-56 0h32v-88H44Z" />
      </G>
    </Svg>
  );
};