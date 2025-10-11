

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFormViewHide = (props: IconProps) => {

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
          <Path d="M3,12 L6,12 C6.5,14.5 9.27272727,17 12,17 C14.7272727,17 17.5,14.5 18,12 L21,12 M12,17 L12,20 M7.5,15.5 L5.5,17.5 M16.5,15.5 L18.5,17.5" fill="none" />
        </G>
      </Svg>
    );
  }

