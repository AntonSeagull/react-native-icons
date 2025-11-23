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

export const TfiRulerAlt = (props: IconProps) => {
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
        <Path d="M12.036.015.015 12.036l4.95 4.949 12.02-12.02zM1.429 12.036l.696-.696 1.414 1.414.707-.707-1.414-1.414.719-.719.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.696-.696.707.707.707-.707-.707-.707.707-.707 1.414 1.414.707-.707-1.414-1.414.718-.718.707.707.707-.707-.707-.707.707-.707 1.415 1.414.707-.707-1.415-1.414.708-.708 3.535 3.536L4.965 15.571z" />
      </G>
    </Svg>
  );
};