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

export const TbMoodHappyFilled = (props: IconProps) => {
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
        <Path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M15 13H9a1 1 0 0 0-1 1v.05a3.975 3.975 0 0 0 3.777 3.97l.227.005a4.026 4.026 0 0 0 3.99-3.79l.006-.206A1 1 0 0 0 15 13M9.01 8l-.127.007A1 1 0 0 0 9 10l.127-.007A1 1 0 0 0 9.01 8m6 0-.127.007A1 1 0 0 0 15 10l.127-.007A1 1 0 0 0 15.01 8" />
      </G>
    </Svg>
  );
};