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

export const CiSaveDown1 = (props: IconProps) => {
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
        <Path d="M17.617 6.383a7.944 7.944 0 0 1-1.748 12.568 8.028 8.028 0 0 1-11.586-5.043 8.03 8.03 0 0 1 2.095-7.517c.451-.46-.256-1.168-.707-.707a8.946 8.946 0 0 0 9.756 14.586 8.946 8.946 0 0 0 2.9-14.594c-.451-.461-1.158.247-.707.707Z" />
        <Path d="m15.355 10.6-3 3a.5.5 0 0 1-.35.15.5.5 0 0 1-.36-.15l-3-3a.5.5 0 0 1 .71-.71l2.14 2.14V3.555a.51.51 0 0 1 .5-.5.5.5 0 0 1 .5.5v8.49l2.15-2.16a.5.5 0 0 1 .71.71Z" />
      </G>
    </Svg>
  );
};