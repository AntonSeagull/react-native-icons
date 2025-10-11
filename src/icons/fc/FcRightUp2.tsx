

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcRightUp2 = (props: IconProps) => {

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
          <Path d="M21,42H8v-8h13c2.2,0,4-1.8,4-4V13h8v17C33,36.6,27.6,42,21,42z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

