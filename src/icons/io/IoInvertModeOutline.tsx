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

export const IoInvertModeOutline = (props: IconProps) => {
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
        <Circle cx={256} cy={256} r={208} fill="none" stroke="#000" strokeMiterlimit={10} strokeWidth={32} />
        <Path d="M256 176v160a80 80 0 0 1 0-160M256 48v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48" />
      </G>
    </Svg>
  );
};