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

export const LiaPaintRollerSolid = (props: IconProps) => {
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
        <Path d="M5 4v8h18V4Zm2 2h14v4H7Zm17 1v2h1v4.25l-9.281 2.781-.719.219V19h-2v9h6v-9h-2v-1.25l9.281-2.781.719-.219V7Zm-9 14h2v5h-2Z" />
      </G>
    </Svg>
  );
};