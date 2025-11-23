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

export const VscSymbolEnumMember = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m7 3 1-1h6l1 1v5l-1 1h-4V8h4V3H8v3H7zm2 6V8L8 7H2L1 8v5l1 1h6l1-1zM8 8v5H2V8zm1.414-1L9 6.586V6h4v1zM9 4h4v1H9zm-2 6H3v1h4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};