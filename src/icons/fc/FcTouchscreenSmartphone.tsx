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

export const FcTouchscreenSmartphone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#E38939" d="M12 40V8c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v32c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4" />
        <Path fill="#FFF3E0" d="M32 7H16c-.6 0-1 .4-1 1v29c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1" />
        <Circle cx={24} cy={41} r={1.5} fill="#A6642A" />
        <Circle cx={24} cy={23} r={2} fill="#E91E63" />
        <Circle cx={24} cy={23} r={4} fill="none" stroke="#F48FB1" strokeMiterlimit={10} strokeWidth={2} />
        <Circle cx={24} cy={23} r={6.5} fill="none" stroke="#F8BBD0" strokeMiterlimit={10} />
      </G>
    </Svg>
  );
};