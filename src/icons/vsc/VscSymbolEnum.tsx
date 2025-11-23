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

export const VscSymbolEnum = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M14 2H8L7 3v3h1V3h6v5h-4v1h4l1-1V3zM9 6h4v1H9.41L9 6.59zM7 7H2L1 8v5l1 1h6l1-1V8L8 7zm1 6H2V8h6zM3 9h4v1H3zm0 2h4v1H3zm6-7h4v1H9z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};