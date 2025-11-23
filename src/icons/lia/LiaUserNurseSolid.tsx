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

export const LiaUserNurseSolid = (props: IconProps) => {
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
        <Path d="M10.156 4 10 4.813l-1 5.625V14h.094a7.03 7.03 0 0 0 3 4.813C8.527 20.343 6 23.883 6 28h2a7.99 7.99 0 0 1 3-6.25v.656l.281.313 4 4 .719.687.719-.687 4-4 .281-.313v-.656A7.99 7.99 0 0 1 24 28h2c0-4.117-2.527-7.656-6.094-9.187a7.03 7.03 0 0 0 3-4.813H23v-3.562l-1-5.626L21.844 4Zm1.688 2h8.312L21 10.781V12H11v-1.219ZM15 7v1h-1v2h1v1h2v-1h1V8h-1V7Zm-3.906 7h9.812A5 5 0 0 1 16 18a5 5 0 0 1-4.906-4M16 20a8 8 0 0 1 3 .563v1l-3 3-3-3v-1A8 8 0 0 1 16 20" />
      </G>
    </Svg>
  );
};