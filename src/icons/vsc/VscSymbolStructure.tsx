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

export const VscSymbolStructure = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2 2 1 3v3l1 1h12l1-1V3l-1-1zm0 1h12v3H2zm-1 7 1-1h3l1 1v3l-1 1H2l-1-1zm2 0H2v3h3v-3zm7 0 1-1h3l1 1v3l-1 1h-3l-1-1zm2 0h-1v3h3v-3z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};