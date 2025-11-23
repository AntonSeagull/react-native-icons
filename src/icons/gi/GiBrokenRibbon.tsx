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

export const GiBrokenRibbon = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m129.867 26.06-1.05 59.12c87.818 31.78 175 31.654 262.9 1.535l-1.07-60.106c-87.14 22.31-174.228 18.73-260.78-.55zm-1.4 78.813-3.317 186.662 72.694-65.21 62.41 207.1 62.41-207.1 72.69 65.21-3.29-185.213a461 461 0 0 1-17.127 5.262l-50.962 70.947-45.288-55.13q-17.852.767-35.708-.09l-45.363 55.22-51.494-71.684.268-.192a442 442 0 0 1-17.923-5.78zm45.77 13.066 24.374 33.93 21.617-26.313a403 403 0 0 1-45.99-7.618zm172.644.662c-15.104 3.245-30.222 5.635-45.347 7.158l21.45 26.11 23.898-33.268zM183.343 313.717 85.838 439.95l84.443 53.974zm146.088 0 13.06 180.207 84.444-53.975-97.504-126.233z" />
      </G>
    </Svg>
  );
};