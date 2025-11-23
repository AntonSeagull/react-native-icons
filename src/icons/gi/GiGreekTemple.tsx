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

export const GiGreekTemple = (props: IconProps) => {
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
        <Path d="M256 26.2 52 135h408zM73 153v14h366v-14zm16 32v206h30V185zm101.334 0v206h30V185zm101.332 0v206h30V185zM393 185v206h30V185zM73 409v30h366v-30zm-32 48v30h430v-30z" />
      </G>
    </Svg>
  );
};