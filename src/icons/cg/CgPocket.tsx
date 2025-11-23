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

export const CgPocket = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M3 4h18v7a9 9 0 1 1-18 0zM1 2h22v9c0 6.075-4.925 11-11 11S1 17.075 1 11zm10.293 12.694a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L12 12.572 8.464 9.037A1 1 0 0 0 7.05 10.45z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};