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

export const CiCalculator1 = (props: IconProps) => {
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
        <Path d="M16.5 21.937h-9a2.5 2.5 0 0 1-2.5-2.5V4.563a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.874a2.5 2.5 0 0 1-2.5 2.5m-9-18.874a1.5 1.5 0 0 0-1.5 1.5v14.874a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.563a1.5 1.5 0 0 0-1.5-1.5Z" />
        <Path d="M14.5 9.757h-5a1.5 1.5 0 0 1-1.5-1.5V6.563a1.5 1.5 0 0 1 1.5-1.5h5a1.5 1.5 0 0 1 1.5 1.5v1.694a1.5 1.5 0 0 1-1.5 1.5m-5-3.694a.5.5 0 0 0-.5.5v1.694a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V6.563a.5.5 0 0 0-.5-.5Z" />
        <Circle cx={12} cy={11.508} r={0.75} />
        <Circle cx={15.25} cy={11.508} r={0.75} />
        <Circle cx={8.75} cy={11.508} r={0.75} />
        <Circle cx={12} cy={14.848} r={0.75} />
        <Circle cx={15.25} cy={14.848} r={0.75} />
        <Circle cx={8.75} cy={14.848} r={0.75} />
        <Circle cx={15.25} cy={18.187} r={0.75} />
        <Path d="M12.248 18.687H8.5a.5.5 0 0 1 0-1h3.744a.5.5 0 1 1 0 1Z" />
      </G>
    </Svg>
  );
};