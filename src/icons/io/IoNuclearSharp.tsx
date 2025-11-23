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

export const IoNuclearSharp = (props: IconProps) => {
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
        <Circle cx={256} cy={256} r={48} />
        <Path d="m223.47 335.59-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68" style={{
        fill: "none"
        }} />
        <Path d="M403.08 108.92a208 208 0 0 0-294.16 294.16 208 208 0 0 0 294.16-294.16M342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.2 170.2 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.2 170.2 0 0 1 73.83 119l-85.48-.09A85.9 85.9 0 0 1 342 256" />
      </G>
    </Svg>
  );
};