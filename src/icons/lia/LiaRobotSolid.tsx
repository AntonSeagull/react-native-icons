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

export const LiaRobotSolid = (props: IconProps) => {
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
        <Path d="M16 1c-1.105 0-2 .895-2 2 0 .738.402 1.371 1 1.719V7h-5c-2.75 0-5 2.25-5 5v2H2v8h3v5h22v-5h3v-8h-3v-2c0-2.75-2.25-5-5-5h-5V4.719c.598-.348 1-.98 1-1.719 0-1.105-.895-2-2-2m-6 8h12c1.668 0 3 1.332 3 3v13h-2v-5H9v5H7V12c0-1.668 1.332-3 3-3m2 4a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m8 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4M4 16h1v4H4Zm23 0h1v4h-1Zm-16 6h2v3h-2Zm4 0h2v3h-2Zm4 0h2v3h-2Z" />
      </G>
    </Svg>
  );
};