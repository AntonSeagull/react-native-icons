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

export const CgGift = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M17.535 2.879a3 3 0 0 0-4.242 0l-1.414 1.414q-.09.09-.172.186a3 3 0 0 0-.171-.186L10.12 2.879A3 3 0 1 0 5.88 7.12L6.757 8H1v6h2v8h18v-8h2V8h-6.343l.878-.879a3 3 0 0 0 0-4.242M14.707 7.12l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414m-4.586-1.414L8.707 4.293a1 1 0 1 0-1.414 1.414l1.414 1.414a1 1 0 1 0 1.414-1.414M21 10v2H3v-2zm-8.083 4H19v6h-6.083zm-1.834 0v6H5v-6z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};