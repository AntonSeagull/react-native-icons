

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdFilterListOff = (props: IconProps) => {

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
          <Path  d="M10.83,8H21V6H8.83L10.83,8z M15.83,13H18v-2h-4.17L15.83,13z M14,16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h0.17 L1.39,4.22l1.41-1.41l18.38,18.38l-1.41,1.41L14,16.83z" />
        </G>
      </Svg>
    );
  }

