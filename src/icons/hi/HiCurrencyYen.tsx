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

export const HiCurrencyYen = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16M7.858 5.485a1 1 0 0 0-1.715 1.03L7.633 9H7a1 1 0 1 0 0 2h1.834l.166.277V12H7a1 1 0 1 0 0 2h2v1a1 1 0 1 0 2 0v-1h2a1 1 0 1 0 0-2h-2v-.723l.166-.277H13a1 1 0 1 0 0-2h-.634l1.492-2.486a1 1 0 1 0-1.716-1.029L10.034 9h-.068z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};