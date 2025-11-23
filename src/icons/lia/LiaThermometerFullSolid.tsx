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

export const LiaThermometerFullSolid = (props: IconProps) => {
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
        <Path d="M12 4v11.469c-1.75 1.27-3 3.207-3 5.531 0 3.855 3.145 7 7 7s7-3.145 7-7c0-2.324-1.25-4.262-3-5.531V14h2v-2h-2v-2h2V8h-2V6h2V4Zm2 2h4v10.406l.5.282c1.496.867 2.5 2.46 2.5 4.312 0 2.773-2.227 5-5 5s-5-2.227-5-5c0-1.852 1.004-3.445 2.5-4.312l.5-.282Zm1 2v10.188c-1.16.414-2 1.511-2 2.812a3 3 0 0 0 6 0c0-1.3-.84-2.398-2-2.812V8Z" />
      </G>
    </Svg>
  );
};