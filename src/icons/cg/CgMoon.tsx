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

export const CgMoon = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M12.226 2.003a9.97 9.97 0 0 0-7.297 2.926c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0a9.97 9.97 0 0 0 2.926-7.297 10 10 0 0 0-.337-2.368 15 15 0 0 1-1.744 1.436c-1.351.949-2.733 1.563-3.986 1.842-1.906.423-3.214.032-3.93-.684s-1.107-2.024-.684-3.93c.279-1.253.893-2.635 1.842-3.986.414-.592.893-1.177 1.436-1.744-.776-.207-1.571-.32-2.368-.337m5.43 15.654a7.96 7.96 0 0 0 2.251-4.438c-3.546 2.045-7.269 2.247-9.321.195s-1.85-5.775.195-9.321a8 8 0 1 0 6.876 13.564" clipRule="evenodd" />
      </G>
    </Svg>
  );
};