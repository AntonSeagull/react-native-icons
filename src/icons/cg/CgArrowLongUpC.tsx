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

export const CgArrowLongUpC = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m7.758 5.23 4.274-4.21 4.21 4.275-1.424 1.403-1.804-1.83-.071 12.288a3.001 3.001 0 0 1-1.029 5.824 3 3 0 0 1-.971-5.835l.071-12.315-1.853 1.826zm4.175 13.75a1 1 0 1 0-.01 2 1 1 0 0 0 .01-2" clipRule="evenodd" />
      </G>
    </Svg>
  );
};