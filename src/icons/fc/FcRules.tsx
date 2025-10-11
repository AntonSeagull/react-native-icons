

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRules = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M39,45H9c0,0-3-0.1-3-8h36C42,44.9,39,45,39,45z" fill="#42A5F5" />
        </G>
      </Svg>
    );
  }

