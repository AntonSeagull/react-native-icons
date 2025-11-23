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

export const CgArrowLeftO = (props: IconProps) => {
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
        <Path fill="currentColor" d="m11.948 14.829-1.414 1.414L6.29 12l4.243-4.243 1.414 1.415L10.12 11h7.537v2H10.12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M4.222 19.778c-4.296-4.296-4.296-11.26 0-15.556s11.26-4.296 15.556 0 4.296 11.26 0 15.556-11.26 4.296-15.556 0m1.414-1.414A9 9 0 1 1 18.364 5.636 9 9 0 0 1 5.636 18.364" clipRule="evenodd" />
      </G>
    </Svg>
  );
};