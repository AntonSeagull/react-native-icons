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

export const PiPianoKeysLight = (props: IconProps) => {
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
        <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M78 46h28v92H78Zm34 104a6 6 0 0 0 6-6V46h20v98a6 6 0 0 0 6 6h10v60h-52v-60Zm38-12V46h28v92ZM46 208V48a2 2 0 0 1 2-2h18v98a6 6 0 0 0 6 6h18v60H48a2 2 0 0 1-2-2m164 0a2 2 0 0 1-2 2h-42v-60h18a6 6 0 0 0 6-6V46h18a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};