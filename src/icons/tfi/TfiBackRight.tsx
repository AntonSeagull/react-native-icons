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

export const TfiBackRight = (props: IconProps) => {
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
        <Path d="M14.583 15v1H7.5C4.468 16 2 13.533 2 10.5S4.468 5 7.5 5h2.912L7.766 2.354l.707-.707L12.326 5.5 8.473 9.354l-.707-.708L10.412 6H7.5C5.019 6 3 8.019 3 10.5S5.019 15 7.5 15z" />
      </G>
    </Svg>
  );
};