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

export const LiaVideoSlashSolid = (props: IconProps) => {
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
        <Path d="M3.719 2.281 2.28 3.72l26 26 1.438-1.438L24 22.563v-1.938l6 3V8.375l-6 3V8H9.438ZM2 8v16h18l-2-2H4V10h2L4 8Zm9.438 2H22v10.563ZM28 11.625v8.75l-4-2v-4.75Z" />
      </G>
    </Svg>
  );
};