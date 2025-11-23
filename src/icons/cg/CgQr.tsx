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

export const CgQr = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9 3H3v6h2V5h4zM3 21v-6h2v4h4v2zM15 3v2h4v4h2V3zm4 12h2v6h-6v-2h4zM7 7h4v4H7zm0 6h4v4H7zm10-6h-4v4h4zm-4 6h4v4h-4z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};