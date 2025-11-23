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

export const IoLogoAmplify = (props: IconProps) => {
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
        <Path d="m112.31 268 40.36-68.69 34.65 59-67.54 115h135L289.31 432H16Zm58.57-99.76 33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z" style={{
        fillRule: "evenodd"
        }} />
      </G>
    </Svg>
  );
};