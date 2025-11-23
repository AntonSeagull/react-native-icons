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

export const LiaFontAwesome = (props: IconProps) => {
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
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm5.5 2a1.5 1.5 0 0 0-1.498 1.5H11V22a1 1 0 0 0 2 0v-4.256c.782-.288 1.645-.51 2.479-.51 1.579 0 2.19.817 3.505.817.94 0 1.814-.318 2.631-.67.205-.088.381-.176.381-.381h.006v-5.62c0-.204-.206-.38-.441-.38-.294 0-1.521.787-2.631.787-.23 0-.436-.03-.64-.117-.994-.377-1.87-.67-2.98-.67-.49 0-.99.077-1.482.195A1.5 1.5 0 0 0 12.5 9" />
      </G>
    </Svg>
  );
};