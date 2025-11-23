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

export const GrFormCut = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="m18 7.524-7.857 6.286zm0 8.38L10.143 9.62zm-9.429-5.761a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143Zm0 6.286a1.571 1.571 0 1 0 0-3.143 1.571 1.571 0 0 0 0 3.143Z" />
      </G>
    </Svg>
  );
};