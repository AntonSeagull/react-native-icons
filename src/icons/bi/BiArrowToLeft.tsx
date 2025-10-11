

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiArrowToLeft = (props: IconProps) => {

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
          <Path d="M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707 1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z" />
        </G>
      </Svg>
    );
  }

