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

export const VscRadioTower = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M2.998 5.58a5.55 5.55 0 0 1 1.62-3.88l-.71-.7a6.45 6.45 0 0 0 0 9.16l.71-.7a5.55 5.55 0 0 1-1.62-3.88m1.06 0a4.42 4.42 0 0 0 1.32 3.17l.71-.71a3.3 3.3 0 0 1-.76-1.12 3.45 3.45 0 0 1 0-2.67 3.2 3.2 0 0 1 .76-1.13l-.71-.71a4.46 4.46 0 0 0-1.32 3.17m7.65 3.21-.71-.71c.33-.32.59-.704.76-1.13a3.45 3.45 0 0 0 0-2.67 3.2 3.2 0 0 0-.76-1.13l.71-.7a4.47 4.47 0 0 1 0 6.34M13.068 1l-.71.71a5.43 5.43 0 0 1 0 7.74l.71.71a6.45 6.45 0 0 0 0-9.16M9.993 5.43a1.5 1.5 0 0 1-.245.98 2 2 0 0 1-.27.23l3.44 7.73-.92.4-.77-1.73h-5.54l-.77 1.73-.92-.4 3.44-7.73a1.52 1.52 0 0 1-.33-1.63 1.55 1.55 0 0 1 .56-.68 1.5 1.5 0 0 1 2.325 1.1m-1.595-.34a.5.5 0 0 0-.25.14.5.5 0 0 0-.11.22.5.5 0 0 0 0 .29c.04.09.102.17.18.23a.54.54 0 0 0 .28.08.51.51 0 0 0 .5-.5.54.54 0 0 0-.08-.28.6.6 0 0 0-.23-.18.5.5 0 0 0-.29 0m.23 2.05h-.27l-.87 1.94h2zm2.2 4.94-.89-2h-2.88l-.89 2z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};