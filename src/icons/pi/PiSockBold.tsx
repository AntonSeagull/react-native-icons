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

export const PiSockBold = (props: IconProps) => {
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
        <Path d="M192 12h-88a20 20 0 0 0-20 20v75l-37.57 37.6a62.91 62.91 0 1 0 89 89l68.4-68.4a27.8 27.8 0 0 0 8.2-19.8V32A20 20 0 0 0 192 12m-4 24v16h-80V36Zm-69.57 180.6a38.91 38.91 0 1 1-55-55l41.09-41.08A12 12 0 0 0 108 112V76h80v25.21A60.09 60.09 0 0 0 140 160a59.4 59.4 0 0 0 7 28.07Zm68.4-68.4-21.51 21.51A36.06 36.06 0 0 1 188 126.06v19.31a4 4 0 0 1-1.17 2.83" />
      </G>
    </Svg>
  );
};