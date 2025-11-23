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

export const LiaCalendarTimesSolid = (props: IconProps) => {
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
        <Path d="M9 5v1H5v22h22V6h-4V5h-2v1H11V5ZM7 8h2v1h2V8h10v1h2V8h2v2H7Zm0 4h18v14H7Zm6.219 2.781L11.78 16.22 14.562 19l-2.78 2.781 1.437 1.438L16 20.437l2.781 2.782 1.438-1.438L17.437 19l2.782-2.781-1.438-1.438L16 17.562Z" />
      </G>
    </Svg>
  );
};