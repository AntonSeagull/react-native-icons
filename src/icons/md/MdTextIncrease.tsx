

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdTextIncrease = (props: IconProps) => {

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
          <Path d="M0.99,19h2.42l1.27-3.58h5.65L11.59,19h2.42L8.75,5h-2.5L0.99,19z M5.41,13.39L7.44,7.6h0.12l2.03,5.79H5.41z M20,11h3v2h-3 v3h-2v-3h-3v-2h3V8h2V11z" />
        </G>
      </Svg>
    );
  }

