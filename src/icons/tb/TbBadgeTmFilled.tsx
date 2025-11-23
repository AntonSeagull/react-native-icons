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

export const TbBadgeTmFilled = (props: IconProps) => {
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
        <Path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-9 4H6a1 1 0 1 0 0 2h1v5a1 1 0 0 0 .883.993L8 16a1 1 0 0 0 1-1v-5h1a1 1 0 0 0 .993-.883L11 9a1 1 0 0 0-1-1m8 1c0-.99-1.283-1.378-1.832-.555L15 10.197l-1.168-1.752C13.283 7.622 12 8.011 12 9v6a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 14 15v-2.697l.168.252.08.104a1 1 0 0 0 1.584-.104l.168-.253V15a1 1 0 0 0 2 0z" />
      </G>
    </Svg>
  );
};