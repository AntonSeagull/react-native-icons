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

export const GoCircleSlash = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1M5.834 19.227A9.46 9.46 0 0 0 12 21.5a9.5 9.5 0 0 0 9.5-9.5 9.46 9.46 0 0 0-2.273-6.166ZM2.5 12a9.46 9.46 0 0 0 2.273 6.166L18.166 4.773A9.46 9.46 0 0 0 12 2.5 9.5 9.5 0 0 0 2.5 12" />
      </G>
    </Svg>
  );
};