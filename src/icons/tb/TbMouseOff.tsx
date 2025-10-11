

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMouseOff = (props: IconProps) => {

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
          <Path  d="M7.733 3.704a3.982 3.982 0 0 1 2.267 -.704h4a4 4 0 0 1 4 4v7m-.1 3.895a4 4 0 0 1 -3.9 3.105h-4a4 4 0 0 1 -4 -4v-10c0 -.3 .033 -.593 .096 -.874" />
          <Path  d="M12 7v1" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

