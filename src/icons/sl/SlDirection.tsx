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

export const SlDirection = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m966.912 298.16-179.121-192A32.1 32.1 0 0 0 764.367 96h-267.12l-1.008-66c0-16.56-14.336-30-32-30s-30 13.44-30 30l-.975 66H80.496c-17.68 0-32 14.32-32 32v384c0 17.68 14.32 32 32 32h352.336v450c0 16.56 14.336 30 32 30s32-13.44 32-30V544h267.536c8.88 0 17.344-3.68 23.408-10.16l179.12-192c11.472-12.304 11.472-31.376.016-43.68M750.463 480H112.495V160h637.968l149.28 160z" />
      </G>
    </Svg>
  );
};