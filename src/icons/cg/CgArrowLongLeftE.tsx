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

export const CgArrowLongLeftE = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m5.263 7.757-4.25 4.236 4.236 4.25 1.417-1.412-1.815-1.82 12.117.04-.008 2 6 .027.026-6-6-.027-.009 2-12.144-.04 1.842-1.837zm15.715 3.312-.01 2-2-.01.01-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};