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

export const TfiPin2 = (props: IconProps) => {
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
        <Path d="M8 11.5h1V17H8zm6-2.7V11H3V8.8l1.094-.487L5.2 2l-.429-.779L4.1 0h8.8l-.672 1.221L11.8 2l1.106 6.312zm-1 .649-.986-.44-.092-.524-1.168-6.659.17-.309.285-.517H5.791l.455.827-.06.346-1.2 6.836-.986.44V10h9z" />
      </G>
    </Svg>
  );
};