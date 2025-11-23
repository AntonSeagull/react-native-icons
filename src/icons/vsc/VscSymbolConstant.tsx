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

export const VscSymbolConstant = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M4 6h8v1H4zm8 3H4v1h8z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="m1 4 1-1h12l1 1v8l-1 1H2l-1-1zm1 0v8h12V4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};