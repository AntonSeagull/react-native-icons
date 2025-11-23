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

export const CgArrowLongDownE = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M14.998 1.02h-6v6h2.001l.013 12.145-1.844-1.834-1.41 1.418 4.254 4.23 4.23-4.254-1.417-1.41-1.813 1.823-.013-12.118h1.999zm-4 2h2v2h-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};