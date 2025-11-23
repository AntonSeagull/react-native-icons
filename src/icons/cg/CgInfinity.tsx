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

export const CgInfinity = (props: IconProps) => {
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
        <Path fill="currentColor" d="m8.121 9.879 2.083 2.083.007-.006 1.452 1.452.006.006 2.122 2.122a5 5 0 1 0 0-7.072l-.714.714 1.415 1.414.713-.713a3 3 0 1 1 0 4.242l-2.072-2.072-.007.006-3.59-3.59a5 5 0 1 0 0 7.07l.713-.713-1.414-1.414-.714.713a3 3 0 1 1 0-4.242" />
      </G>
    </Svg>
  );
};