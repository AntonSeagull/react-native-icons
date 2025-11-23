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

export const RiNurseLine = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 15a8 8 0 0 1 7.939 7H4.063A8 8 0 0 1 12 15m-1.812 2.28A6.02 6.02 0 0 0 6.802 20h5.199zm3.626 0L12.001 20h5.198a6.02 6.02 0 0 0-3.385-2.72M18.001 2v6A6 6 0 0 1 6 8V2zM8 8a4 4 0 0 0 8 0zm8-4H8v2h8z" />
      </G>
    </Svg>
  );
};