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

export const TbChessFilled = (props: IconProps) => {
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
        <Path d="M12 2a4 4 0 0 1 4 4 5 5 0 0 1-.438 2.001L16 8a1 1 0 0 1 .117 1.993L16 10h-1.263l1.24 5.79a1 1 0 0 1-.747 1.184l-.113.02L15 17H9a1 1 0 0 1-.996-1.093l.018-.117L9.262 10H8a1 1 0 0 1-.117-1.993L8 8h.438a5.2 5.2 0 0 1-.412-1.525l-.02-.259L8 6a4 4 0 0 1 4-4M18 18H6a1 1 0 0 0-1 1 2 2 0 0 0 2 2h10a2 2 0 0 0 1.987-1.768l.011-.174A1 1 0 0 0 18 18" />
      </G>
    </Svg>
  );
};