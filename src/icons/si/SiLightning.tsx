

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiLightning = (props: IconProps) => {

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
          <Path d="M12 0L1.75 6v12L12 24l10.25-6V6zm-1.775 18l1.08-4.657-2.428-2.397L13.79 6l-1.082 4.665 2.414 2.384z" />
        </G>
      </Svg>
    );
  }

