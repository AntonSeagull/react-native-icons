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

export const LiaBtc = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 3v3H8v20h4v3h2v-3h2v3h2v-3h1.5c3.027 0 5.5-2.473 5.5-5.5 0-2.082-1.16-3.91-2.875-4.844A5.513 5.513 0 0 0 18.5 6H18V3h-2v3h-2V3Zm-2 5h8.5c1.945 0 3.5 1.555 3.5 3.5S20.445 15 18.5 15H10Zm0 9h9.5c1.945 0 3.5 1.555 3.5 3.5S21.445 24 19.5 24H10Z" />
      </G>
    </Svg>
  );
};