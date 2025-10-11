

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiEthFill = (props: IconProps) => {

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
          <Path d="M11.9999 0 4.62988 12.2201 11.9999 16.5743 19.3699 12.2201 11.9999 0ZM11.9999 24 4.62988 13.6172 11.9999 18 19.3699 13.6172 11.9999 24Z" />
        </G>
      </Svg>
    );
  }

