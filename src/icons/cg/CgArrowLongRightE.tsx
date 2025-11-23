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

export const CgArrowLongRightE = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m22.987 11.993-4.236 4.25-1.417-1.412 1.815-1.82-12.118.04.01 2-6 .027-.028-6 6-.027.01 2 12.144-.04-1.842-1.837 1.412-1.417zm-19.965-.924.01 2 2-.01-.01-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};