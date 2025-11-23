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

export const CgArrowUpO = (props: IconProps) => {
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
        <Path fill="currentColor" d="m14.829 11.948 1.414-1.414L12 6.29l-4.243 4.243 1.415 1.414L11 10.12v7.537h2V10.12z" />
        <Path fill="currentColor" fillRule="evenodd" d="M19.778 4.222c-4.296-4.296-11.26-4.296-15.556 0s-4.296 11.26 0 15.556 11.26 4.296 15.556 0 4.296-11.26 0-15.556m-1.414 1.414A9 9 0 1 0 5.636 18.364 9 9 0 0 0 18.364 5.636" clipRule="evenodd" />
      </G>
    </Svg>
  );
};