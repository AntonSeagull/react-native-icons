

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAward = (props: IconProps) => {

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
          <Path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
          <Path d="M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889" />
          <Path d="M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889" />
        </G>
      </Svg>
    );
  }

