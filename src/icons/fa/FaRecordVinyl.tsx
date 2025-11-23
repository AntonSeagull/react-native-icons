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

export const FaRecordVinyl = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M256 152a104 104 0 1 0 104 104 104 104 0 0 0-104-104m0 128a24 24 0 1 1 24-24 24 24 0 0 1-24 24m0-272C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8m0 376a128 128 0 1 1 128-128 128 128 0 0 1-128 128" />
      </G>
    </Svg>
  );
};