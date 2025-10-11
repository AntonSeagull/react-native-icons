

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRedo = (props: IconProps) => {

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
          <Path d="M20,14h12v8H20c-2.8,0-5,2.2-5,5s2.2,5,5,5h3v8h-3c-7.2,0-13-5.8-13-13S12.8,14,20,14z" />
        </G>
      </Svg>
    );
  }

