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

export const LiaAsteriskSolid = (props: IconProps) => {
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
        <Path d="m17.7 17 6.198 8.398L21.5 27 16 18.3 10.5 27l-2.3-1.602L14.397 17l-9.296-2.398L6 12l9.102 3.2L14.5 5h3L17 15.2l9-3.2.8 2.7Z" />
      </G>
    </Svg>
  );
};