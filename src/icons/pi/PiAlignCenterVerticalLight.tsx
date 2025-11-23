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

export const PiAlignCenterVerticalLight = (props: IconProps) => {
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
        <Path d="M224 122h-18V72a14 14 0 0 0-14-14h-40a14 14 0 0 0-14 14v50h-20V48a14 14 0 0 0-14-14H64a14 14 0 0 0-14 14v74H32a6 6 0 0 0 0 12h18v74a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-74h20v50a14 14 0 0 0 14 14h40a14 14 0 0 0 14-14v-50h18a6 6 0 0 0 0-12m-118 86a2 2 0 0 1-2 2H64a2 2 0 0 1-2-2V48a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Zm88-24a2 2 0 0 1-2 2h-40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};