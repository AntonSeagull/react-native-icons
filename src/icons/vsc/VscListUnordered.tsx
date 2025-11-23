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

export const VscListUnordered = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="M2 3H1v1h1zm0 3H1v1h1zM1 9h1v1H1zm1 3H1v1h1zm2-9h11v1H4zm11 3H4v1h11zM4 9h11v1H4zm11 3H4v1h11z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};