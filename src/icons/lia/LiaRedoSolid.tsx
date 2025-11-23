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

export const LiaRedoSolid = (props: IconProps) => {
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
        <Path d="M19.219 5.281 17.78 6.72 24.063 13H11c-3.844 0-7 3.156-7 7v7h2v-7c0-2.754 2.246-5 5-5h13.063l-6.282 6.281 1.438 1.438 8-8 .687-.719-.687-.719Z" />
      </G>
    </Svg>
  );
};