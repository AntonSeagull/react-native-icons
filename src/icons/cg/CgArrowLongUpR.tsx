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

export const CgArrowLongUpR = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M7.793 4.61 12.068.398l4.21 4.275-1.424 1.403-1.804-1.831-.07 11.886 3.227 3.226-4.243 4.243-4.242-4.243 3.259-3.26.07-11.89-1.854 1.826zm4.171 16.163 1.414-1.415-1.414-1.414-1.414 1.414z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};