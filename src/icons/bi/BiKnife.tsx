

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiKnife = (props: IconProps) => {

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
          <Path d="M19.66 3.6a3 3 0 0 0-4.24 0l-.71.71-7.07 7.07 2.12 2.12-6.36 6.36 1.41 1.42L19.66 6.43c1.1-1.1 1.1-1.73.71-2.12z" />
        </G>
      </Svg>
    );
  }

