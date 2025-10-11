

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgEthernet = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M4 0.5V20.5H11V23.5H13V20.5H20V0.5H4ZM18 2.5H6V8.5H10V14.5H14V8.5H18V2.5ZM6 18.5V10.5H8V16.5H16V10.5H18V18.5H6Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

