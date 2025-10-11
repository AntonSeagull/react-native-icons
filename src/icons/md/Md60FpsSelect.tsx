

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const Md60FpsSelect = (props: IconProps) => {

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
          <Path  d="M18,6v6h-3V6H18z M18,4h-3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2V6C20,4.9,19.1,4,18,4z M11,6V4H6 C4.9,4,4,4.9,4,6v6c0,1.1,0.9,2,2,2h3c1.1,0,2-0.9,2-2v-2c0-1.1-0.9-2-2-2H6V6H11z M9,10v2H6v-2H9z M5,22H3v-5h2V22z M9,22H7v-5h2 V22z M13,22h-2v-5h2V22z M21,22h-6v-5h6V22z" />
        </G>
      </Svg>
    );
  }

