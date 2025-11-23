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

export const LiaChurchSolid = (props: IconProps) => {
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
        <Path d="M15 3v2h-2v2h2v2.563l-3.719 3.718-.281.313v3.812l-6.5 3.719 1 1.75 1.5-.844V29h8v-4c0-.555.445-1 1-1s1 .445 1 1v4h8v-6.969l1.5.844 1-1.75-6.5-3.719v-3.812l-.281-.313L17 9.562V7h2V5h-2V3Zm1 8.438 3 3v4.156l.5.281 3.5 2V27h-4v-2c0-1.645-1.355-3-3-3s-3 1.355-3 3v2H9v-6.125l3.5-2 .5-.281v-4.157ZM16 15c-.55 0-1 .45-1 1v3h2v-3c0-.55-.45-1-1-1" />
      </G>
    </Svg>
  );
};