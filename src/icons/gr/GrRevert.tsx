

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRevert = (props: IconProps) => {

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
          <Path d="M8,3 L3,8 L8,13 M12,20 L15,20 C18.3137085,20 21,17.3137085 21,14 C21,10.6862915 18.3137085,8 15,8 L4,8" fill="none" />
        </G>
      </Svg>
    );
  }

