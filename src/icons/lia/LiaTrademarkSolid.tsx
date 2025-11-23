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

export const LiaTrademarkSolid = (props: IconProps) => {
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
        <Path d="M3 8v2h4v13h2V10h4V8Zm12 0v15h2V10.875l4.156 6.656.844 1.344.844-1.344L27 10.875V23h2V8h-2.562l-.282.469L22 15.125l-4.156-6.656L17.562 8Z" />
      </G>
    </Svg>
  );
};