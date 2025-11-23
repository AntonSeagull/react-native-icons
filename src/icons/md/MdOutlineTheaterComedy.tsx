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

export const MdOutlineTheaterComedy = (props: IconProps) => {
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
        <Circle cx={19} cy={6.5} r={1} />
        <Circle cx={15} cy={6.5} r={1} />
        <Path d="M16.99 9c-1.38 0-2.5.84-2.5 1.88h5c0-1.04-1.12-1.88-2.5-1.88M1 16c0 3.31 2.69 6 6 6s6-2.69 6-6V9H1zm2-5h8v5c0 2.21-1.79 4-4 4s-4-1.79-4-4z" />
        <Path d="M11 2v5.5h2V4h8v5c0 2.21-1.79 4-4 4-.95 0-1.81-.35-2.5-.9v2.35c.76.35 1.61.55 2.5.55 3.31 0 6-2.69 6-6V2z" />
        <Circle cx={5} cy={13.5} r={1} />
        <Circle cx={9} cy={13.5} r={1} />
        <Path d="M7 17.88c1.38 0 2.5-.84 2.5-1.88h-5c0 1.04 1.12 1.88 2.5 1.88" />
      </G>
    </Svg>
  );
};