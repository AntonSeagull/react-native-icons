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

export const LiaTerminalSolid = (props: IconProps) => {
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
        <Path d="M4 5v22h24V5Zm2 2h20v2H6Zm0 4h20v14H6Zm5.219 2.781L9.78 15.22 12.562 18l-2.78 2.781 1.437 1.438 3.5-3.5.687-.719-.687-.719ZM16 20v2h6v-2Z" />
      </G>
    </Svg>
  );
};