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

export const CiInboxIn = (props: IconProps) => {
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
        <Path d="M11.5 9.361v-4.83a.5.5 0 0 1 1 0v4.82l1.27-1.27a.524.524 0 0 1 .71 0 .513.513 0 0 1 0 .71l-2.13 2.12a.49.49 0 0 1-.7 0l-2.12-2.12a.5.5 0 0 1 0-.71.51.51 0 0 1 .7 0ZM20.488 19.949H3.512a1.45 1.45 0 0 1-1.45-1.449v-5.639a1.45 1.45 0 0 1 1.45-1.449h4.1a1.44 1.44 0 0 1 1.3.8l1.373 2.726a.45.45 0 0 0 .4.247h2.629a.45.45 0 0 0 .4-.248l1.373-2.724a1.44 1.44 0 0 1 1.3-.8h4.1a1.45 1.45 0 0 1 1.45 1.449V18.5a1.45 1.45 0 0 1-1.449 1.449M3.512 12.412a.45.45 0 0 0-.45.449V18.5a.45.45 0 0 0 .45.449h16.976a.45.45 0 0 0 .45-.449v-5.639a.45.45 0 0 0-.45-.449h-4.1a.45.45 0 0 0-.4.247l-1.378 2.725a1.45 1.45 0 0 1-1.295.8h-2.629a1.44 1.44 0 0 1-1.295-.8l-1.373-2.725a.45.45 0 0 0-.4-.247Z" />
      </G>
    </Svg>
  );
};