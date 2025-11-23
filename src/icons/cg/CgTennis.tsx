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

export const CgTennis = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0-3.905 10.237 0 14.142 10.237 3.905 14.142 0m.872-8.03a7.97 7.97 0 0 0-2.286-4.698 7.97 7.97 0 0 0-4.717-2.288l-.01.056a11.01 11.01 0 0 1-8.819 8.819l-.056.01a7.97 7.97 0 0 0 2.288 4.717 7.97 7.97 0 0 0 4.698 2.286l.012-.07a11.01 11.01 0 0 1 8.819-8.82zm-.071 2.388v-.334a9.01 9.01 0 0 0-6.777 6.777h.334a7.96 7.96 0 0 0 4.228-2.215 7.96 7.96 0 0 0 2.215-4.228m-15.76-2.54v-.223a7.96 7.96 0 0 1 2.231-4.323 7.96 7.96 0 0 1 4.323-2.232h.222a9.01 9.01 0 0 1-6.777 6.777" clipRule="evenodd" />
      </G>
    </Svg>
  );
};