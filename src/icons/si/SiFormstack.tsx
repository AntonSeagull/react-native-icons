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

export const SiFormstack = (props: IconProps) => {
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
        <Path d="M19 4.035h1.4a.6.6 0 0 1 .6.6v14.73a.6.6 0 0 1-.6.6H19zm3 1.991h1.4a.6.6 0 0 1 .6.6v10.747a.6.6 0 0 1-.6.6H22zM.6 2.044h16.8a.6.6 0 0 1 .6.6v18.712a.6.6 0 0 1-.6.6H.6a.6.6 0 0 1-.6-.6V2.644a.6.6 0 0 1 .6-.6M4.2 5.23a.2.2 0 0 0-.2.2v7.35q0 .07.044.125a.2.2 0 0 0 .281.032l9.228-7.35a.2.2 0 0 0-.125-.356zM4 17.185q0 .062.035.113a.2.2 0 0 0 .278.052l7.576-5.184a.2.2 0 0 0-.113-.365H6.89a.2.2 0 0 0-.123.042l-2.69 2.102a.2.2 0 0 0-.077.158zm.086 1.157a.2.2 0 0 0-.086.164v.087c0 .106.086.192.192.192H7a.2.2 0 0 0 .2-.2v-2.022a.2.2 0 0 0-.314-.164z" />
      </G>
    </Svg>
  );
};