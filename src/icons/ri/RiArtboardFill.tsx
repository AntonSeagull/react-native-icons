

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const RiArtboardFill = (props: IconProps) => {

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
          <Path d="M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3Z" />
        </G>
      </Svg>
    );
  }

