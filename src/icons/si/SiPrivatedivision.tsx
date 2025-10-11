

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const SiPrivatedivision = (props: IconProps) => {

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
          <Path d="M12.384.248A.422.422 0 0 0 11.998 0a.427.427 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18.428.428 0 0 0 .157-.18l5.443-11.752L12.384.248Zm-.386 18.449-3.101-6.695 3.101-6.697 3.1 6.697-3.1 6.695Z" />
        </G>
      </Svg>
    );
  }

