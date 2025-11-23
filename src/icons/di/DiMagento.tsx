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

export const DiMagento = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#444" d="M26.941 10.161 16.007 3.408 5.041 10.172V22.4l2.924 1.743V11.856l8.041-4.992 8.027 4.992v12.317l2.924-1.772V10.173zm-9.346 5.297v10.073l-1.588 1.004-1.602-1.004V11.206l-3.574 2.215v12.524l5.176 3.22 5.162-3.22V13.421l-3.574-2.215z" />
      </G>
    </Svg>
  );
};