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

export const TfiRulerAlt2 = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M0 .293V17h16.707zm1 2.414 2.957 2.957-.655.655.707.707.655-.655.709.709-.655.656.707.707.655-.655.71.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655.709.709-.655.655.707.707.655-.655.71.71-.655.655.707.707.655-.655L14.293 16H1zM2 15h7.707L2 7.293zm1-5.293L7.293 14H3z" />
      </G>
    </Svg>
  );
};