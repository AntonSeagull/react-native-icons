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

export const CgArrowDownO = (props: IconProps) => {
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
        <Path fill="currentColor" d="m14.829 12.026 1.414 1.414L12 17.683 7.757 13.44l1.415-1.414L11 13.854V6.317h2v7.537z" />
        <Path fill="currentColor" fillRule="evenodd" d="M19.778 19.778c-4.296 4.296-11.26 4.296-15.556 0s-4.296-11.26 0-15.556 11.26-4.296 15.556 0 4.296 11.26 0 15.556m-1.414-1.414A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728" clipRule="evenodd" />
      </G>
    </Svg>
  );
};