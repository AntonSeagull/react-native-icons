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

export const CgArrowLongUpE = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m12.032 1.013 4.21 4.275-1.424 1.403-1.804-1.83-.07 12.116 1.999.01-.029 6-6-.029.029-6 2 .01.071-12.145L9.161 6.65 7.758 5.224zm-1.108 19.955 2 .01.01-2-2-.01z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};