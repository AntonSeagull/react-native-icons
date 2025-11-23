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

export const VscCopy = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="m4 4 1-1h5.414L14 6.586V14l-1 1H5l-1-1zm9 3-3-3H5v10h8z" clipRule="evenodd" />
        <Path fillRule="evenodd" d="M3 1 2 2v10l1 1V2h6.414l-1-1z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};