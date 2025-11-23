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

export const PiFlowArrowFill = (props: IconProps) => {
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
        <Path d="m245.66 85.66-32 32a8 8 0 0 1-11.32-11.32L220.69 88H208c-38.67 0-46.59 19-56.62 43.08C141.05 155.88 129.33 184 80 184h-1a32 32 0 1 1 0-16h1c38.67 0 46.59-19 56.62-43.08C147 100.12 158.67 72 208 72h12.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32" />
      </G>
    </Svg>
  );
};