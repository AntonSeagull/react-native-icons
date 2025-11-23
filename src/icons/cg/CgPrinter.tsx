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

export const CgPrinter = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M8 4h8v2H8zm10 2h4v12h-4v4H6v-4H2V6h4V2h12zm2 10h-2v-2H6v2H4V8h16zM8 16h8v4H8zm0-6H6v2h2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};