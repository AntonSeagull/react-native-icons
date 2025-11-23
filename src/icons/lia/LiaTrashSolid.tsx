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

export const LiaTrashSolid = (props: IconProps) => {
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
        <Path d="M14 4c-.523 0-1.059.184-1.437.563C12.183 4.94 12 5.477 12 6v1H5v2h1.094L8 27.094l.094.906h15.812l.094-.906L25.906 9H27V7h-7V6c0-.523-.184-1.059-.562-1.437C19.058 4.183 18.523 4 18 4Zm0 2h4v1h-4ZM8.125 9h15.75l-1.781 17H9.906ZM12 12v11h2V12Zm3 0v11h2V12Zm3 0v11h2V12Z" />
      </G>
    </Svg>
  );
};