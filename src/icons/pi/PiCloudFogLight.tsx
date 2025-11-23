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

export const PiCloudFogLight = (props: IconProps) => {
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
        <Path d="M120 206H72a6 6 0 0 1 0-12h48a6 6 0 0 1 0 12m64-12h-24a6 6 0 0 0 0 12h24a6 6 0 0 0 0-12m-24 32h-56a6 6 0 0 0 0 12h56a6 6 0 0 0 0-12m70-126a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 100m-12 0a62.06 62.06 0 0 0-124-3.65 6 6 0 0 1-12-.7 76 76 0 0 1 1.07-9A38 38 0 1 0 76 162h80a62.07 62.07 0 0 0 62-62" />
      </G>
    </Svg>
  );
};