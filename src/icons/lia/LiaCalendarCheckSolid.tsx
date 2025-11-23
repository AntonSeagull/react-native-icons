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

export const LiaCalendarCheckSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5ZM7 8h2v1h2V8h10v1h2V8h2v2H7Zm0 4h18v14H7Zm13.281 2.281L15 19.562l-2.281-2.28-1.438 1.437 3 3 .719.687.719-.687 6-6Z" />
      </G>
    </Svg>
  );
};