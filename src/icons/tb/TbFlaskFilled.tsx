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

export const TbFlaskFilled = (props: IconProps) => {
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
        <Path d="M15 2a1 1 0 0 1 0 2v4.826l3.932 10.814.034.077a1.7 1.7 0 0 1-.002 1.193l-.07.162a1.7 1.7 0 0 1-1.213.911L17.5 22h-11l-.181-.017a1.7 1.7 0 0 1-1.285-2.266l.039-.09L9 8.823V4a1 1 0 1 1 0-2zm-2 2h-2v4h2z" />
      </G>
    </Svg>
  );
};