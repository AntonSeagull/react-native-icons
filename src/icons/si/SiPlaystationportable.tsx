

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPlaystationportable = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Path  d="M0 9.93v.296h7.182v1.626H.001v2.217h.295v-1.921h7.182V9.93zm11.29 0v3.844H7.478v.296h4.124v-3.844h3.813V9.93zm5.233 0v.296h7.182v1.626h-7.182v2.217h.296v-1.921H24V9.93z" />
        </G>
      </Svg>
    );
  }

