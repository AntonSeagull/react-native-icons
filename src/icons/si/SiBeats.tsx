

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiBeats = (props: IconProps) => {

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
          <Path d="M2.625 0v15h8.25a7.5 7.5 0 0 0 0-15zm17.016 11.705c-1.571 3.261-4.91 5.517-8.766 5.517h-8.25V24h11.25a7.5 7.5 0 0 0 5.766-12.295z" />
        </G>
      </Svg>
    );
  }

