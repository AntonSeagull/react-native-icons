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

export const PiRulerBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m238.15 70.54-52.69-52.68a20 20 0 0 0-28.29 0L17.85 157.17a20 20 0 0 0 0 28.29l52.69 52.68a20 20 0 0 0 28.29 0L238.15 98.83a20 20 0 0 0 0-28.29M84.68 218.34l-47-47L64 145l23.52 23.52a12 12 0 0 0 17-17L81 128l15-15 23.51 23.52a12 12 0 0 0 17-17L113 96l15-15 23.52 23.52a12 12 0 0 0 17-17L145 64l26.35-26.34 47 47Z" />
      </G>
    </Svg>
  );
};