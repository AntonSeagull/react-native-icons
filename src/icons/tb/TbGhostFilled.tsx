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

export const TbGhostFilled = (props: IconProps) => {
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
        <Path d="M12 3a8 8 0 0 1 7.996 7.75L20 11l-.001 6.954.01.103a2.78 2.78 0 0 1-1.468 2.618l-.163.08c-1.053.475-2.283.248-3.129-.593l-.137-.146a.65.65 0 0 0-1.024 0 2.65 2.65 0 0 1-4.176 0 .65.65 0 0 0-.512-.25c-.2 0-.389.092-.55.296a2.78 2.78 0 0 1-4.859-2.005l.008-.091L4 11l.004-.25A8 8 0 0 1 12 3m2.82 10.429a1 1 0 0 0-1.391-.25 2.5 2.5 0 0 1-2.858 0 1 1 0 0 0-1.142 1.642 4.5 4.5 0 0 0 5.142 0 1 1 0 0 0 .25-1.392zM10.01 9l-.127.007A1 1 0 0 0 10 11l.127-.007A1 1 0 0 0 10.01 9m4 0-.127.007A1 1 0 0 0 14 11l.127-.007A1 1 0 0 0 14.01 9" />
      </G>
    </Svg>
  );
};