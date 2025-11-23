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

export const SiMeteor = (props: IconProps) => {
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
        <Path d="m0 .234 21.912 20.537s.412.575-.124 1.151c-.535.576-1.236.083-1.236.083zm6.508 2.058 17.01 15.638s.413.576-.123 1.152c-.534.576-1.235.083-1.235.083zM1.936 6.696l17.01 15.638s.412.576-.123 1.152-1.235.082-1.235.082zm10.073-2.635 11.886 10.927s.287.401-.087.805-.863.058-.863.058zm-8.567 7.737 11.886 10.926s.285.4-.088.803c-.375.403-.863.059-.863.059zm14.187-5.185 5.426 4.955s.142.188-.044.377c-.185.188-.428.027-.428.027l-4.954-5.358zM6.178 17.231l5.425 4.956s.144.188-.042.377-.427.026-.427.026z" />
      </G>
    </Svg>
  );
};