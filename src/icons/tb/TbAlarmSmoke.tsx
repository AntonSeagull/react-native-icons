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

export const TbAlarmSmoke = (props: IconProps) => {
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
        <Path d="m18 8-.8 3a1.25 1.25 0 0 1-1.2 1H8a1.25 1.25 0 0 1-1.2-1L6 8M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 16c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25M7 16c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25M17 16c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25" />
      </G>
    </Svg>
  );
};