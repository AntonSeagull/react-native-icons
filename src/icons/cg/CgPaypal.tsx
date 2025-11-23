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

export const CgPaypal = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M6.47 3.544h8c1.639 0 2.945.775 3.626 1.971 1.22.872 1.847 2.4 1.512 4.138-.521 2.712-3.183 4.91-5.944 4.91h-2l-1.134 5.892H6.398l.23-1.199h-3.18zm1.622 1.964h6c1.657 0 2.746 1.32 2.433 2.946S14.615 11.4 12.96 11.4h-4l-1.134 5.892h-2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};