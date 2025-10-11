

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiDeepcool = (props: IconProps) => {

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
          <Path d="M12 12v3.046H3.046V6h6V0H12v9.046H6.092V12H12Zm8.954 3.046V18h-5.908v6H12v-8.954h8.954Z" />
        </G>
      </Svg>
    );
  }

