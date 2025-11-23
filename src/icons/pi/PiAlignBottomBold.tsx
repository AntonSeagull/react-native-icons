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

export const PiAlignBottomBold = (props: IconProps) => {
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
        <Path d="M228 216a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12m-92-48V80a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v88a20 20 0 0 1-20 20h-36a20 20 0 0 1-20-20m24-4h28V84h-28Zm-116 4V40a20 20 0 0 1 20-20h36a20 20 0 0 1 20 20v128a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20m24-4h28V44H68Z" />
      </G>
    </Svg>
  );
};