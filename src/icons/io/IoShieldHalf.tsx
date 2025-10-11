

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoShieldHalf = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M48.9,112.37C138.32,96.33,175.29,84.45,256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464,240.58,457.79,32.7,369.13,48.9,112.37Z" fill="none" />
          <Path d="M256,48c80.71,36.45,117.68,48.33,207.1,64.37C479.3,369.13,271.42,457.79,256,464Z" />
        </G>
      </Svg>
    );
  }

