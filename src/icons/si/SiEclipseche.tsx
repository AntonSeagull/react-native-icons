

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiEclipseche = (props: IconProps) => {

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
          <Path d="M12 0L1.604 6.021v7.452L12 7.494l3.941 2.254 6.455-3.727zm10.396 10.527L12 16.506l-7.334-4.217-3.062 1.76v3.93L12 24l10.396-6.021z" />
        </G>
      </Svg>
    );
  }

