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

export const TbBrandAstro = (props: IconProps) => {
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
        <Path d="M14.972 3.483c.163.196.247.46.413.987L19.025 16a15.5 15.5 0 0 0-4.352-1.42l-2.37-7.723a.31.31 0 0 0-.296-.213.31.31 0 0 0-.295.214L9.37 14.576A15.5 15.5 0 0 0 5 15.998l3.657-11.53c.168-.527.251-.79.415-.986.144-.172.331-.306.544-.388C9.858 3 10.143 3 10.715 3h2.612c.572 0 .858 0 1.1.094.213.082.4.217.545.39M9 18c0 1.5 2 3 3 4 1-1 3-3 3-4q-3 1.5-6 0" />
      </G>
    </Svg>
  );
};